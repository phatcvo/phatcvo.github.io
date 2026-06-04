(() => {
  const html = document.documentElement;

  const getTheme = () => (html.classList.contains("light") ? "dark" : "light");

  const initWakatime = () => {
    const imgs = Array.from(document.querySelectorAll("img[data-wakatime]"));
    if (!imgs.length) return;

    const escapeHtml = (s) =>
      String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const loadInsights = async (img) => {
      const card = img.closest(".card");
      const container = card ? card.querySelector("[data-wakatime-insights]") : null;
      if (!container) return;
      if (container.dataset.loaded === "1") return;
      container.dataset.loaded = "1";

      try {
        const res = await fetch(img.src, { mode: "cors" });
        if (!res.ok) throw new Error("fetch failed");
        const svg = await res.text();

        // Examples inside the SVG: "C++ (63.94%)"
        const matches = Array.from(svg.matchAll(/>([^<>]{1,48}) \((\d+(?:\.\d+)?)%\)</g));
        const items = [];
        const seen = new Set();

        for (const m of matches) {
          const label = (m[1] || "").trim();
          const pct = Number.parseFloat(m[2]);
          if (!label || !Number.isFinite(pct) || pct <= 0) continue;
          if (seen.has(label)) continue;
          seen.add(label);
          items.push({ label, pct });
          if (items.length >= 8) break;
        }

        if (!items.length) throw new Error("no insights");

        container.innerHTML = items
          .map((it) => `<span class="badge">${escapeHtml(it.label)} ${it.pct.toFixed(2)}%</span>`)
          .join("");
      } catch {
        // container.innerHTML = '<span class="badge">Insights unavailable</span>';
      }
    };

    const setSrc = (img) => {
      const theme = getTheme();
      const src = theme === "dark" ? img.dataset.darkSrc : img.dataset.lightSrc;
      if (!src) return;
      if (img.src !== src) img.src = src;
      img.dataset.loaded = "1";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSrc(e.target);
            void loadInsights(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    imgs.forEach((img) => io.observe(img));

    const mo = new MutationObserver(() => {
      for (const img of imgs) {
        if (img.dataset.loaded === "1") setSrc(img);
      }
    });
    mo.observe(html, { attributes: true, attributeFilter: ["class"] });
  };

  const initReveal = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealEls.forEach((el) => io.observe(el));
  };

  initWakatime();
  initReveal();
})();
