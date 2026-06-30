#!/usr/bin/env python3
"""Build an ordered manifest of Lec-DRL posts for migration."""
import json, re
from pathlib import Path

SRC = Path("/home/cody/Documents/github/Lec-DRL/posts")
OUT = Path(__file__).parent / "manifest.json"

H1 = re.compile(r"^#\s+(.*?)\s*$")
ATTR = re.compile(r"\{[^}]*\}")  # strip {#sec-x} / {-} trailing attrs


def first_h1(path: Path) -> str:
    for line in path.read_text(encoding="utf-8").splitlines():
        m = H1.match(line)
        if m:
            return ATTR.sub("", m.group(1)).strip()
    return path.stem  # fallback


def slug(stem: str) -> str:
    return stem.lower().replace(".", "-")


def main():
    # single-digit numeric prefixes sort correctly lexicographically
    posts = sorted(SRC.glob("*.qmd"), key=lambda p: p.name)
    items = []
    for i, p in enumerate(posts, start=1):
        items.append({
            "src": str(p),
            "stem": p.stem,
            "slug": slug(p.stem),
            "weight": i * 10,
            "title": first_h1(p),
            "old_url": f"/Lec-DRL/posts/{p.stem}.html",
            "new_url": f"/blog/drl/{slug(p.stem)}/",
        })
    OUT.write_text(json.dumps(items, indent=2, ensure_ascii=False))
    print(f"Wrote {len(items)} posts to {OUT}")
    for it in items:
        print(f'  {it["weight"]:>3}  {it["slug"]:<28} {it["title"]}')


if __name__ == "__main__":
    main()
