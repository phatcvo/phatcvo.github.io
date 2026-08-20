/*
 * Draws the connections in a `wiring` figure.
 *
 * The cards are laid out by CSS grid, so where they land depends on the
 * viewport — a build-time SVG cannot know it. This measures the cards after
 * layout and draws between them, then redraws whenever the box changes size.
 * That is the whole reason these diagrams are not flat PNGs: the same figure
 * is a three-column schematic on a laptop and a readable vertical stack on a
 * phone.
 *
 * Stroke colour comes from CSS (`.wiring-wires path[data-kind=...]`), not
 * from here, so the theme toggle needs no redraw.
 */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var KINDS = ["serial", "rs485", "phase", "encoder", "power", "gnd"];
  var GAP = 14; // px between parallel runs sharing the same pair of cards

  function el(name, attrs) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  /* One arrowhead per kind: `context-stroke` is still not safe everywhere, so
     each marker carries its own fill and CSS repaints it per theme. */
  function defs() {
    var d = el("defs", {});
    KINDS.forEach(function (kind) {
      var m = el("marker", {
        id: "wv-arrow-" + kind,
        viewBox: "0 0 10 10",
        refX: "9", refY: "5",
        markerWidth: "6", markerHeight: "6",
        orient: "auto-start-reverse",
      });
      m.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", "data-kind": kind }));
      d.appendChild(m);
    });
    return d;
  }

  /* Anchor on whichever face points at the other card, so the same edge list
     works in the wide layout (side by side) and the stacked one. */
  function anchors(a, b) {
    var dx = b.left + b.width / 2 - (a.left + a.width / 2);
    var dy = b.top + b.height / 2 - (a.top + a.height / 2);
    var horizontal = Math.abs(dx) > Math.abs(dy);
    if (horizontal) {
      return dx >= 0
        ? { from: [a.left + a.width, a.top + a.height / 2], to: [b.left, b.top + b.height / 2], axis: "h" }
        : { from: [a.left, a.top + a.height / 2], to: [b.left + b.width, b.top + b.height / 2], axis: "h" };
    }
    return dy >= 0
      ? { from: [a.left + a.width / 2, a.top + a.height], to: [b.left + b.width / 2, b.top], axis: "v" }
      : { from: [a.left + a.width / 2, a.top], to: [b.left + b.width / 2, b.top + b.height], axis: "v" };
  }

  function curve(p, q, axis) {
    if (axis === "h") {
      var mx = (p[0] + q[0]) / 2;
      return "M" + p[0] + "," + p[1] + " C" + mx + "," + p[1] + " " + mx + "," + q[1] + " " + q[0] + "," + q[1];
    }
    var my = (p[1] + q[1]) / 2;
    return "M" + p[0] + "," + p[1] + " C" + p[0] + "," + my + " " + q[0] + "," + my + " " + q[0] + "," + q[1];
  }

  /* In the stacked layout every card sits in one column, so a run between two
     cards that are not neighbours would otherwise be drawn straight through
     whatever is parked between them. These route such runs out into a gutter
     lane on the left instead — the same trick a rack diagram uses. */
  function obstructed(a, b, others) {
    var top = Math.min(a.top + a.height, b.top + b.height);
    var bottom = Math.max(a.top, b.top);
    return others.some(function (o) {
      if (o === a || o === b) return false;
      return o.top < bottom && o.top + o.height > top;
    });
  }

  /* Greedy interval colouring: two gutter runs may share a lane only if their
     vertical spans do not overlap. */
  function assignLanes(runs) {
    var lanes = [];
    runs.forEach(function (r) {
      for (var i = 0; i < lanes.length; i++) {
        var clash = lanes[i].some(function (o) {
          return r.top < o.bottom && r.bottom > o.top;
        });
        if (!clash) { lanes[i].push(r); r.lane = i; return; }
      }
      lanes.push([r]);
      r.lane = lanes.length - 1;
    });
  }

  function gutterPath(a, b, laneX) {
    var ay = a.top + a.height / 2;
    var by = b.top + b.height / 2;
    var r = 8;
    var dir = by > ay ? 1 : -1;
    return "M" + a.left + "," + ay +
      " H" + (laneX + r) +
      " Q" + laneX + "," + ay + " " + laneX + "," + (ay + r * dir) +
      " V" + (by - r * dir) +
      " Q" + laneX + "," + by + " " + (laneX + r) + "," + by +
      " H" + b.left;
  }

  function draw(fig) {
    var svg = fig.querySelector(".wiring-wires");
    var labelLayer = fig.querySelector(".wiring-labels");
    var stage = fig.querySelector(".wiring-stage");
    var src = fig.querySelector(".wiring-edges");
    if (!svg || !stage || !src) return;

    var edges;
    try {
      edges = JSON.parse(src.textContent) || [];
    } catch (e) {
      console.error("wiring: bad edge JSON", e);
      return;
    }

    var base = stage.getBoundingClientRect();
    var rect = function (id) {
      var node = fig.querySelector('[data-node="' + id + '"]');
      if (!node) return null;
      var r = node.getBoundingClientRect();
      return { left: r.left - base.left, top: r.top - base.top, width: r.width, height: r.height };
    };

    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    svg.setAttribute("width", base.width);
    svg.setAttribute("height", base.height);
    svg.textContent = "";
    svg.appendChild(defs());
    labelLayer.textContent = "";

    /* One column means the CSS has collapsed to the narrow layout, and the
       routing rules change with it. Read it off the grid rather than the
       viewport so the figure is correct wherever it is embedded. */
    var grid = fig.querySelector(".wiring-grid");
    var stacked = window.getComputedStyle(grid).gridTemplateColumns.split(" ").length < 2;
    fig.setAttribute("data-layout", stacked ? "stacked" : "wide");

    var all = [];
    fig.querySelectorAll("[data-node]").forEach(function (n) {
      var r = n.getBoundingClientRect();
      all.push({ left: r.left - base.left, top: r.top - base.top, width: r.width, height: r.height });
    });
    var minLeft = all.reduce(function (m, r) { return Math.min(m, r.left); }, Infinity);

    /* Parallel runs between one pair of cards get fanned apart, otherwise the
       three motor phases and the encoder pair land on top of each other. */
    var seen = {};
    edges.forEach(function (e) {
      var key = e.from + ">" + e.to;
      seen[key] = (seen[key] || 0) + 1;
    });
    var used = {};

    var plans = [];
    edges.forEach(function (e) {
      var a = rect(e.from), b = rect(e.to);
      if (!a || !b) {
        console.warn("wiring: edge references a missing node", e);
        return;
      }
      var key = e.from + ">" + e.to;
      var i = used[key] || 0;
      used[key] = i + 1;
      var plan = {
        edge: e,
        a: a,
        b: b,
        spread: (i - (seen[key] - 1) / 2) * GAP,
        kind: KINDS.indexOf(e.kind) >= 0 ? e.kind : "serial",
        gutter: stacked && obstructed(a, b, all),
      };
      if (plan.gutter) {
        plan.top = Math.min(a.top + a.height / 2, b.top + b.height / 2);
        plan.bottom = Math.max(a.top + a.height / 2, b.top + b.height / 2);
      }
      plans.push(plan);
    });

    assignLanes(plans.filter(function (p) { return p.gutter; }));

    plans.forEach(function (plan) {
      var a = plan.a, b = plan.b, d, mid;

      if (plan.gutter) {
        var laneX = minLeft - 14 - plan.lane * 11 + plan.spread;
        d = gutterPath(a, b, laneX);
        mid = null; // the midpoint of a gutter run lands on an unrelated card
      } else {
        var an = anchors(a, b);
        var p = an.from.slice(), q = an.to.slice();
        if (an.axis === "h") { p[1] += plan.spread; q[1] += plan.spread; }
        else { p[0] += plan.spread; q[0] += plan.spread; }
        d = curve(p, q, an.axis);
        mid = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      }

      svg.appendChild(el("path", {
        d: d,
        "data-kind": plan.kind,
        fill: "none",
        "marker-end": "url(#wv-arrow-" + plan.kind + ")",
      }));

      if (!plan.edge.label || !mid) return;
      /* Labels are HTML, not <text>: they wrap, they inherit the article's
         font, and a reader can select the pin names to search a datasheet.
         Gutter runs get none — the connection list below the figure carries
         their pin names instead. */
      var lab = document.createElement("span");
      lab.className = "wiring-label";
      lab.setAttribute("data-kind", plan.kind);
      lab.textContent = plan.edge.label;
      lab.style.left = mid[0] + "px";
      lab.style.top = mid[1] + "px";
      labelLayer.appendChild(lab);
    });

    fig.setAttribute("data-drawn", "true");
  }

  function init() {
    var figs = Array.prototype.slice.call(document.querySelectorAll(".wiring"));
    if (!figs.length) return;

    figs.forEach(function (fig) {
      var redraw = function () { draw(fig); };
      redraw();

      if (typeof ResizeObserver === "function") {
        var ro = new ResizeObserver(redraw);
        ro.observe(fig.querySelector(".wiring-stage"));
      } else {
        window.addEventListener("resize", redraw);
      }

      /* Card heights change as the part photos decode, which moves every
         anchor below them. */
      fig.querySelectorAll(".wiring-photo img").forEach(function (img) {
        if (!img.complete) img.addEventListener("load", redraw, { once: true });
      });

      if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
