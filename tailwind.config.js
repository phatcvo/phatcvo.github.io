/*
 * The `stone` ramp is remapped onto the site's warm earth palette
 * (paper #FBF9F4 → sand #EFEBE3 → rule #D4CCBF → ink-soft #5A504A → ink #1F1A17).
 * Layouts already use stone-* utilities everywhere, so overriding the ramp
 * recolours the whole site from one place. Accent colours live as CSS custom
 * properties in assets/main.css (--accent / --amber / --go).
 */
const stone = {
  50: "#FBF9F4", // paper
  100: "#F4F0E8",
  200: "#E6E0D5", // sand, deeper
  300: "#D4CCBF", // rule
  400: "#ADA398",
  500: "#83786F",
  600: "#5A504A", // ink-soft
  700: "#463D38",
  800: "#322B26",
  900: "#231E1A",
  950: "#15120F",
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
    "pre-code": "#EEE8DF", // paper, dimmed
    "pre-bg": "#1F1A17", // ink
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
        ink: "#1F1A17",
        "ink-soft": "#5A504A",
        paper: "#FBF9F4",
        sand: "#EFEBE3",
        rule: "#D4CCBF",
        oxblood: "#7B2D26",
        ochre: "#B07C2A",
        go: "#2F6F52",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", '"Times New Roman"', "serif"],
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
            /* The report is square-cornered throughout; the typography plugin
             * rounds `pre` and `kbd`, and `important: true` makes those rules
             * unbeatable from a stylesheet — so zero them at the source. */
            pre: { borderRadius: "0" },
            kbd: { borderRadius: "0" },
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
