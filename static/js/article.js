(() => {
  const progress = document.getElementById("reading-progress-bar");
  if (progress) {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
    if (revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("reveal-in");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  const copyable = Array.from(document.querySelectorAll("pre > code"));
  for (const code of copyable) {
    const pre = code.parentElement;
    if (!pre || pre.dataset.copyEnhanced === "1") continue;
    pre.dataset.copyEnhanced = "1";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy-btn";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.textContent = "Copy";

    btn.addEventListener("click", async () => {
      const text = code.innerText;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy"), 1200);
      } catch {
        btn.textContent = "Failed";
        setTimeout(() => (btn.textContent = "Copy"), 1200);
      }
    });

    pre.style.position = "relative";
    pre.appendChild(btn);
  }
})();
