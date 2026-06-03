(() => {
  const html = document.documentElement;

  const getTheme = () => (html.classList.contains("dark") ? "dark" : "light");

  const initWakatime = () => {
    const imgs = Array.from(document.querySelectorAll("img[data-wakatime]"));
    if (!imgs.length) return;

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
