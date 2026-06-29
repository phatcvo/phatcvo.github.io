# Design: Consolidate the Lec-DRL blog into the Hugo website

- **Date:** 2026-06-30
- **Status:** Approved direction (Approach B); pending spec review
- **Repo:** `phatcvo.github.io` — custom Hugo site (no external theme), Hugo **extended 0.128.0**, Tailwind + Tailwind Typography, deployed to GitHub Pages via `.github/workflows/hugo.yml` (`hugo` → `./public`).
- **Scope note:** This is personal-website work. It is **not** related to the TR-FMS project.

## 1. Goal

Give every blog post / course lecture the exact look-and-feel of the Hugo site, with a **single source of truth** and minimal long-term maintenance.

Today: `phatcvo.github.io` (Hugo) is the main site. The DRL course lives in a separate `Lec-DRL` (Quarto) repo on its own GitHub Pages site. The site's "Writing" nav points at `/blog/`, which is empty and shows a placeholder card linking out to the Quarto site.

## 2. Decision

**Approach B — consolidate the blog content into Hugo.** Author all posts as Hugo Markdown; retire the standalone Quarto site.

Rejected alternatives:
- **A — re-theme Quarto to match Hugo:** condemns us to maintaining two static-site generators and continuously syncing two theme systems to chase a consistency Hugo gives for free.
- **C — hybrid multi-builder pipeline (publish both under one domain):** adds CI complexity without removing the duplication; only worth it for executable notebooks, which this content does not use.

Why B fits (from clarifying answers): content is static **prose + images + math** (no Quarto computation), the author is happy writing Hugo Markdown, a **simple ordered list** is enough (no book sidebar), and single-source-of-truth is the lowest-maintenance architecture available here. The only real cost is a one-time, scriptable migration of 10–30 lectures.

## 3. Current-state facts (verified in repo)

- "Writing" nav (`layouts/partials/header.html`) → `{{ "blog" | relURL }}` → `/blog/`.
- `content/blog/_index.md` exists; the section is **empty** (no posts).
- `layouts/blog/list.html`:
  - **Populated branch** (`where .Pages "Type" "blog"` non-empty) → post cards, `ByDate.Reverse`.
  - **Empty branch** (`else`) → hand-coded "Courses & resources" card linking to external `Lec-DRL`, `Lec-MPC`, `Safe-Optimal-Control`, and `phatcvo.blogspot.com`.
- `layouts/_default/single.html` already provides: "← Back to Writing", published date, reading time, tag/category pills, `.Content` wrapped in `prose prose-stone dark:prose-invert article-prose` (Tailwind Typography → automatic site styling + dark mode), sidebar `.TableOfContents` for blog pages, and the `prevnext` partial.
- `layouts/partials/prevnext.html` uses `.PrevInSection` / `.NextInSection` (Hugo orders a section by `weight`).
- `layouts/partials/head.html` builds CSS via `css.TailwindCSS`. **No math support yet**; **no `markup:` block** in `config.yaml` (Goldmark defaults).
- Deploy: GitHub Actions, Hugo extended **0.128.0**, build → `./public` → Pages. (0.128 supports the Goldmark `passthrough` extension; it predates server-side `transform.ToMath`, so we use **client-side KaTeX**.)

**Implication:** the migration infrastructure is already half-built — single-post rendering, TOC, prev/next, and taxonomies all exist. The main work is content conversion, math setup, and one template refactor.

## 4. Target architecture

### 4.1 Content layout — DRL as a nested section (leaf bundles)

```
content/blog/
  _index.md                 # existing blog landing
  drl/
    _index.md               # course overview + ordered lecture list
    01-intro/
      index.md              # lecture: Hugo front matter + Markdown body
      img/...               # co-located images (page-bundle resources)
    02-mdp/
      index.md
      img/...
    ...
```

- URLs: `/blog/drl/`, `/blog/drl/01-intro/` — internal, same domain.
- **Ordering:** `weight: 1,2,3…` per lecture drives `.PrevInSection` / `.NextInSection` and the course list order automatically.
- Each lecture `index.md` is a **leaf bundle** that owns its images; image refs are bundle-relative (`img/foo.png`).

**Why nest under `drl/`** rather than dropping lectures straight into `content/blog/`: the blog index then shows the course as a single "collection" card (matching the existing "Courses & resources" intent) instead of 10–30 individual cards in reverse-date order, which would scramble the intended reading sequence.

### 4.2 Blog index template change (avoid a half-migrated gap)

Refactor `layouts/blog/list.html` so it **always** renders, in order:

1. **Internal posts & collections** — the existing card grid (now non-empty: the DRL course card + any standalone articles).
2. **A persistent "Other courses & resources" block** — the still-external links (`Lec-MPC`, `Safe-Optimal-Control`, old blogspot) that are not yet migrated.

Today those external links live only in the `else` (empty) branch, so the moment DRL posts exist they would vanish. Splitting them into an always-rendered block keeps the page complete during partial migration and makes migrating MPC / Safe-Optimal-Control later a one-line move (external link → internal section). Replace the external `Lec-DRL` card with the internal `/blog/drl/` course.

> Implementation detail to finalize at the pilot: the exact composition of the internal grid (`.Pages` vs. `.Sections` for collections + `.RegularPages` for standalone articles). In current Hugo, `.Pages` on a section includes child section pages, so the `drl` collection appears as a card with Type `blog`; confirm during the pilot and compose explicitly if needed.

### 4.3 Course landing page (`content/blog/drl/_index.md` + layout)

The course index lists its lectures as an ordered list/cards by `weight`. Implement via a section list template for the course (e.g. `layouts/blog/drl/list.html`, or a generic nested-section list selected by a front-matter `layout`), reusing the existing `card` / `section-*` classes so it matches the site. Render: course title, intro/description, then `range .Pages.ByWeight` → numbered lecture links (title, optional reading time).

### 4.4 Math rendering (client-side KaTeX, conditional)

1. Enable Goldmark passthrough in `config.yaml` so math delimiters are emitted verbatim (not mangled by Markdown):
   ```yaml
   markup:
     goldmark:
       extensions:
         passthrough:
           enable: true
           delimiters:
             inline: [["$", "$"], ["\\(", "\\)"]]
             block:  [["$$", "$$"], ["\\[", "\\]"]]
   ```
2. Add `layouts/partials/math.html`: KaTeX CSS (in `<head>`) + `katex` + `auto-render` JS (deferred) that renders on `DOMContentLoaded` with the same delimiters.
3. **Vendor KaTeX** under `static/katex/` (pinned version) rather than a runtime CDN, consistent with the site's self-hosted assets and for offline/deterministic builds. (CDN-with-SRI is an acceptable fallback.)
4. **Gate on front matter:** include `{{ if .Params.math }}{{ partial "math.html" . }}{{ end }}` from `head.html` (CSS) and before `</body>` (JS), so KaTeX loads only on lecture pages. Lectures set `math: true`.

Existing `$…$` / `$$…$$` from Quarto carry over unchanged.

### 4.5 Front-matter mapping (Quarto → Hugo)

| Quarto (`.qmd` YAML) | Hugo front matter | Notes |
|---|---|---|
| `title` | `title` | |
| `date` | `date` | ISO; drives "Published" + index sort |
| `author` | *(drop)* | site-level author already set |
| `categories` / `tags` | `tags` (and/or `categories`) | feeds existing taxonomy pills |
| — | `weight` | lecture order (new) |
| — | `draft: false` | |
| — | `math: true` | enables KaTeX on the page |
| — | `description` | card summary (else `.Summary`) |
| — | `aliases: ["/Lec-DRL/<old>/"]` | 301 from old Quarto URLs |
| `format`, `execute`, `bibliography`, `jupyter`, … | *(drop)* | Quarto-only |

### 4.6 Redirects & nav

- Per lecture: `aliases` to the old Quarto URL path so existing links/bookmarks 301 to the new page (Hugo emits alias redirect stubs).
- "Writing" nav already → `/blog/`; **no nav change needed**.
- Optionally add a redirect stub on the retired Quarto site (see 4.7) pointing at the new location.

### 4.7 Fate of the Lec-DRL repo

- Convert `Lec-DRL` to an **archive**: README banner "Moved to https://phatcvo.github.io/blog/drl/", **disable its GitHub Pages**, and optionally replace its landing page with a meta-refresh redirect so old inbound links still land.
- Do **not** keep it as a parallel authoring source — that re-creates the two-system problem. Single source of truth = `content/blog/` in the Hugo repo.

### 4.8 Image / asset handling

- Each lecture's images move into its leaf bundle (`content/blog/drl/<lecture>/img/…`) and are referenced relatively. Conversion rewrites Quarto image paths to bundle-relative.
- Shared/large media that should not be per-page may go to `static/images/blog/…` and be referenced absolutely; default to page-bundle co-location for portability.

## 5. Migration mechanics (10–30 lectures)

1. **Inventory** `Lec-DRL`: list source files (`.qmd` / `.ipynb` / `.md`), their current published URLs, front-matter fields, and image references.
2. **Conversion script** (Python, one-off, lives outside `content/` — e.g. `docs/` or `scripts/`): per source → parse YAML front matter → emit Hugo front matter (table 4.5) → create leaf-bundle dir → copy images + rewrite paths → write `index.md`. Math delimiters pass through unchanged. Assign `weight` from source ordering.
3. **Pilot:** convert ONE representative lecture end-to-end, run `hugo server`, confirm parity (typography, dark mode, math, TOC, prev/next, image loading). Fix script/templates before batch.
4. **Batch:** convert the rest; **manually review each** (10–30 is eyeball-able): math renders, images load, headings/TOC sensible, links work.
5. **Index + templates:** implement the `list.html` refactor (4.2) and course landing (4.3); set `aliases`, `weight`, `math`, tags.

## 6. Validation (acceptance)

Run `hugo server -D` locally and verify:

- Every lecture renders with site styling + dark mode; inline and display math render; images load; TOC + prev/next correct; lecture order matches `weight`.
- Blog index shows the DRL course card **and** the persistent "Other courses & resources" block (Lec-MPC / Safe-Optimal-Control / old blog still visible).
- Old Quarto URLs resolve via `aliases`.
- `hugo --gc --minify` (production build, as CI does) completes with no errors/warnings; spot-check built `public/`.

Then push; let GitHub Actions deploy; spot-check live; finally archive `Lec-DRL` + disable its Pages.

## 7. Non-goals / out of scope

- Migrating `Lec-MPC` and `Safe-Optimal-Control` (same playbook later; the `list.html` refactor makes it incremental).
- Quarto computational features (executable cells, citations, cross-refs) — confirmed unused.
- Redesigning the blog visual style — existing components are reused verbatim.

## 8. Risks & mitigations

- **Math edge cases** (Quarto macros, `align` environments): the pilot surfaces these; KaTeX covers most LaTeX; unsupported macros handled via KaTeX `macros` option or minor source edits.
- **Image path drift:** conversion rewrites + per-post manual review.
- **Broken inbound links:** `aliases` + optional redirect stub on the retired Quarto site.
- **Sort confusion** (date-reverse index vs. weight-ordered course): nesting the course under `drl/` isolates weight ordering from the date-sorted index.
- **Tailwind purge** dropping classes used only in new markup: KaTeX ships its own CSS; new templates reuse existing component classes already captured in `hugo_stats.json`.

## 9. High-level step sequence (detailed plan to follow)

1. Add math support (config passthrough + `math.html` partial, vendored KaTeX); verify on a scratch page.
2. Refactor `layouts/blog/list.html` (internal grid + persistent external-resources block).
3. Create `content/blog/drl/_index.md` + course list layout.
4. Build conversion script; convert pilot lecture; verify look/parity.
5. Batch-convert remaining lectures; review each; add `aliases`, `weight`, `math`, tags.
6. Local validation (§6); production build check.
7. Push; GitHub Actions deploy; spot-check live.
8. Archive `Lec-DRL` repo + disable its Pages (+ optional redirect stub).
