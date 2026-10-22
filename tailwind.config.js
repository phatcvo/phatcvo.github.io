/*
 * The `stone` ramp is remapped onto the site's cool charcoal / soft-grey palette
 * (white → #F3F4F6 → rule #DDE1E6 → muted #8B939C → panel #161B21 → charcoal #101418).
 * Layouts already use stone-* utilities everywhere, so overriding the ramp
 * recolours the whole site from one place. Accent colours live as CSS custom
 * properties in assets/main.css (--accent / --amber / --go).
 */
const stone = {
  50: "#F7F8F9",
  100: "#ECEEF1",
  200: "#DDE1E6", // rule
  300: "#C3C9D0",
  400: "#8B939C", // muted (dark)
  500: "#6B737C",
  600: "#4F5760",
  700: "#353C44",
  800: "#252C34", // rule (dark)
  900: "#161B21", // panel
  950: "#101418", // charcoal
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
    "pre-code": "#D5D9DE", // soft grey
    "pre-bg": "#0B0E11", // below charcoal
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
        charcoal: "#101418",
        panel: "#161B21",
        bronze: "#C9A45C",
        go: "#2F6F52",
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
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
