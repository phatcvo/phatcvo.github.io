#!/usr/bin/env python3
"""Convert one or more Lec-DRL posts (.qmd) to Hugo page bundles via Quarto."""
import json, re, subprocess, sys, tempfile
from pathlib import Path

ROOT = Path("/home/cody/Documents/github/phatcvo.github.io")
MANIFEST = json.loads((ROOT / "scripts/migrate-drl/manifest.json").read_text())
BIB = ROOT / "scripts/migrate-drl/bib.yml"
DEST = ROOT / "content/blog/drl"
SLIDES_DIR = Path("/home/cody/Documents/github/Lec-DRL/slides")
SLIDE_OVERRIDE = {"2.3-PolicyGradient": "2.3-PG", "2.8-EntropyRL": "2.8-SAC"}

H1 = re.compile(r"^#\s+.*$")
IMG = re.compile(r"\]\(img/")  # markdown image path prefix
ALERT = re.compile(r"(?m)^(\s*>\s*)\[!(\w+)\]\s*$")  # GitHub alert marker
FENCE = re.compile(r"(?m)^:{3,}.*$\n?")              # leftover Quarto layout divs
XREF = re.compile(r"\*{0,2}\?@[\w:-]+\?*\*{0,2}")    # unresolved cross-post xref


def clean(md: str) -> str:
    """Resolve artifacts Quarto's gfm pass leaves behind."""
    md = md.replace("&#10;", "\n")                  # decode literal newline entities
    md = FENCE.sub("", md)                          # drop .columns/.column layout fences
    md = md.replace('src="img/', 'src="/images/drl/').replace("src='img/", "src='/images/drl/")
    md = IMG.sub("](/images/drl/", md)              # markdown image paths
    md = ALERT.sub(lambda m: f"{m.group(1)}**{m.group(2).title()}**", md)
    md = XREF.sub("*(cross-reference)*", md)
    return md


def render_gfm(qmd: Path) -> str:
    """Quarto-render a single qmd to GitHub Markdown, citations/callouts/xrefs resolved."""
    with tempfile.TemporaryDirectory() as td:
        subprocess.run([
            "quarto", "render", str(qmd),
            "--to", "gfm",
            "--metadata-file", str(BIB),
            "--output", "out.md",
            "--output-dir", td,
        ], check=True, cwd=qmd.parent)
        # Quarto mirrors the input's project-relative path under --output-dir,
        # so locate out.md wherever it landed.
        hits = list(Path(td).rglob("out.md"))
        if not hits:
            raise FileNotFoundError(f"quarto produced no out.md under {td}")
        return hits[0].read_text(encoding="utf-8")


def strip_first_h1(md: str) -> str:
    lines = md.splitlines()
    for i, line in enumerate(lines):
        if H1.match(line):
            del lines[i]
            if i < len(lines) and lines[i].strip() == "":
                del lines[i]
            break
    return "\n".join(lines)


def slide_url(stem: str):
    """Return the published slide URL for a post stem, or None if no deck exists."""
    s = SLIDE_OVERRIDE.get(stem, stem)
    if (SLIDES_DIR / f"{s}.qmd").exists():
        return f"https://phatcvo.github.io/Lec-DRL/slides/{s}.html"
    return None


def front_matter(item: dict) -> str:
    lines = [
        "---",
        f'title: "{item["title"].replace(chr(34), chr(39))}"',
        "date: 2026-06-30",
        f'weight: {item["weight"]}',
        "math: true",
        'tags: ["Deep RL"]',
    ]
    url = slide_url(item["stem"])
    if url:
        lines.append(f'slides_url: "{url}"')
    return "\n".join(lines) + "\n---\n\n"


def convert(item: dict):
    qmd = Path(item["src"])
    md = render_gfm(qmd)
    md = strip_first_h1(md)
    md = clean(md)
    bundle = DEST / item["slug"]
    bundle.mkdir(parents=True, exist_ok=True)
    (bundle / "index.md").write_text(front_matter(item) + md, encoding="utf-8")
    print(f'  wrote {bundle / "index.md"}')


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None  # optional slug filter
    for item in MANIFEST:
        if only and item["slug"] != only:
            continue
        print(f'Converting {item["slug"]} (w{item["weight"]})')
        convert(item)


if __name__ == "__main__":
    main()
