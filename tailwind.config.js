/*
 * The `stone` ramp is remapped onto the TR-FMS report palette
 * (paper #FBFAF7 → concrete #E6E4DE → rule #C9C5BB → ink-soft #4C5754 → ink #171F1D).
 * Layouts already use stone-* utilities everywhere, so overriding the ramp
 * recolours the whole site from one place. Accent colours live as CSS custom
 * properties in assets/main.css (--accent / --amber / --go).
 */
const stone = {
  50: "#FBFAF7", // paper
  100: "#F2F0E9",
  200: "#E6E4DE", // concrete
  300: "#C9C5BB", // rule
  400: "#A3A399",
  500: "#7C837E",
  600: "#4C5754", // ink-soft
  700: "#3B4644",
  800: "#2A3432",
  900: "#1E2725",
  950: "#121917",
};

/*
 * @tailwindcss/typography ships its own colour ramp, and because this config
 * sets `important: true` every rule it emits carries !important — which no
 * plain stylesheet rule can outrank. So the prose colour tokens have to be
 * injected through the plugin's own theme, where they merge into the same
 * .prose / .prose-stone rules and win on source order.
 *
 * The `-invert` set gets identical values on purpose: --text / --accent /
 * --border already flip with html.dark (see assets/main.css), so one set of
 * declarations is correct in both themes, with or without `prose-invert`.
 */
const proseTokens = (() => {
  const tokens = {
    body: "rgb(var(--text-muted))",
    headings: "rgb(var(--text))",
    lead: "rgb(var(--text-muted))",
    links: "rgb(var(--accent))",
    bold: "rgb(var(--text))",
    counters: "rgb(var(--text-muted))",
    bullets: "rgb(var(--border))",
    hr: "rgb(var(--border))",
    quotes: "rgb(var(--text))",
    "quote-borders": "rgb(var(--accent))",
    captions: "rgb(var(--text-muted))",
    kbd: "rgb(var(--text))",
    code: "rgb(var(--text))",
    "pre-code": "#E6E4DE", // concrete
    "pre-bg": "#171F1D", // ink
    "th-borders": "rgb(var(--border))",
    "td-borders": "rgb(var(--border))",
  };

  const css = {};
  for (const [name, value] of Object.entries(tokens)) {
    css[`--tw-prose-${name}`] = value;
    css[`--tw-prose-invert-${name}`] = value;
  }
  return css;
})();

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ['pagination', 'page-item'],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        stone,
        ink: "#171F1D",
        "ink-soft": "#4C5754",
        paper: "#FBFAF7",
        concrete: "#E6E4DE",
        rule: "#C9C5BB",
        teal: "#0E4F4A",
        amber: "#C8801B",
        go: "#2F6F52",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ['"IBM Plex Sans Condensed"', '"Helvetica Neue"', '"Arial Narrow"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", '"SF Mono"', "Menlo", "monospace"],
      },
      backgroundColor: (theme) => ({
        darkest: theme(`colors.stone.900`),
        darker: theme(`colors.stone.800`),
        dark: theme(`colors.stone.700`),
      }),
      typography: {
        DEFAULT: {
          css: {
            ...proseTokens,
            "code::before": false,
            "code::after": false,
            a: {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            },
          },
        },
        /* Layouts use `prose prose-stone`; that colour theme re-sets the
         * tokens after .prose, so it needs the palette too. */
        stone: { css: { ...proseTokens } },
        invert: { css: { ...proseTokens } },
      },
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
