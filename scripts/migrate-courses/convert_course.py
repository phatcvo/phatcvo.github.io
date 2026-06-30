#!/usr/bin/env python3
"""Generalized Quarto-course -> Hugo migrator (config-driven).

Usage: convert_course.py <course> [<slug-filter>]
  course: mpc | safe-optimal
Preserves each post's existing YAML front matter and appends weight/math.
Run from the phatcvo.github.io repo root.
"""
import re, subprocess, sys, tempfile
from pathlib import Path

ROOT = Path("/home/cody/Documents/github/phatcvo.github.io")

# ---- course configs: ordered (stem, slug, [title override]) -----------------
COURSES = {
    "mpc": {
        "src_dir": Path("/home/cody/Documents/github/Lec-MPC/posts"),
        "section": "mpc",
        "bib": [
            "/home/cody/Documents/github/Lec-MPC/assets/ReinforcementLearning.bib",
            "/home/cody/Documents/github/Lec-MPC/assets/DeepLearning.bib",
        ],
        "img_src": None,          # images are external github-raw URLs
        "img_dest": None,
        "old_url": "/Lec-MPC/posts/{stem}.html",
        "posts": [  # navbar order, then the two racing extras
            ("Linear-Model-Predictive-Control", "linear-mpc"),
            ("Nominal-Nonlinear-Model-Predictive-Control", "nonlinear-mpc"),
            ("Iterative-Linear-Quadratic-Regulator-and-Differential-Dynamic-PRogramming", "ilqr-ddp"),
            ("Model-Predictive-Control-with-discrete-time-Control-Barrier-Functions", "mpc-cbf"),
            ("MPC-for-Quadrotor", "mpc-quadrotor"),
            ("Learning-MPC-for-Racing", "learning-mpc-racing"),
            ("LPV-MPP-MCP-for-racing", "lpv-mpc-racing"),
        ],
    },
    "safe-optimal": {
        "src_dir": Path("/home/cody/Documents/github/Safe-Optimal-Control"),
        "section": "safe-optimal",
        "bib": [],
        "img_src": Path("/home/cody/Documents/github/Safe-Optimal-Control/img"),
        "img_dest": "safe-optimal",
        "old_url": "/Safe-Optimal-Control/{stem}.html",
        "posts": [  # navbar order (index = landing, about excluded)
            ("optimal-control", "optimal-control"),
            ("safe-control", "safe-control"),
            ("game-theory", "game-theory"),
            ("sequential-learning", "sequential-learning"),
            ("reinforcement-learning", "reinforcement-learning"),
            ("learning-from-demonstrations", "learning-from-demonstrations"),
            ("motion-planning", "motion-planning"),
        ],
    },
}

H1 = re.compile(r"^#\s+.*$")
ALERT = re.compile(r"(?m)^(\s*>\s*)\[!(\w+)\]\s*$")
FENCE = re.compile(r"(?m)^:{3,}.*$\n?")
XREF = re.compile(r"\*{0,2}\?@[\w:-]+\?*\*{0,2}")


def split_frontmatter(text: str):
    """Return (frontmatter_str_or_None, body)."""
    if text.startswith("---"):
        m = re.search(r"\n---\s*\n", text)
        if m:
            return text[3:m.start()].strip("\n"), text[m.end():]
    return None, text


def render_gfm(qmd: Path, bib) -> str:
    with tempfile.TemporaryDirectory() as td:
        cmd = ["quarto", "render", str(qmd), "--to", "gfm",
               "--output", "out.md", "--output-dir", td]
        for b in bib:
            cmd += ["--metadata", f"bibliography:{b}"]
        if bib:
            cmd += ["--metadata", "link-citations:true"]
        subprocess.run(cmd, check=True, cwd=qmd.parent)
        hits = list(Path(td).rglob("out.md"))
        if not hits:
            raise FileNotFoundError(f"no out.md under {td}")
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


def clean(md: str, img_dest) -> str:
    md = md.replace("&#10;", "\n")
    md = FENCE.sub("", md)
    # Collapse each display-math block onto a single line. Multi-line $$...$$
    # blocks get mis-parsed by Goldmark (e.g. matrix rows turned into headings),
    # splitting the delimiters across DOM nodes so KaTeX can't pair them. LaTeX
    # is whitespace-insensitive, so a single-line block renders identically and
    # reliably (matches the blocks that already work).
    md = re.sub(r"\$\$(.+?)\$\$",
                lambda m: " $$ " + " ".join(m.group(1).split()) + " $$ ",
                md, flags=re.S)
    if img_dest:  # only rewrite local img/ refs when we copy images
        md = md.replace('src="img/', f'src="/images/{img_dest}/').replace("src='img/", f"src='/images/{img_dest}/")
        md = md.replace("](img/", f"](/images/{img_dest}/")
    md = ALERT.sub(lambda m: f"{m.group(1)}**{m.group(2).title()}**", md)
    md = XREF.sub("*(cross-reference)*", md)
    return md


def build_frontmatter(src_fm: str, weight: int) -> str:
    """Reuse the source post's front matter, append weight + math."""
    lines = [l for l in src_fm.splitlines() if not l.startswith(("weight:", "math:"))]
    lines.append(f"weight: {weight}")
    lines.append("math: true")
    return "---\n" + "\n".join(lines) + "\n---\n\n"


def convert(cfg, stem, slug, weight):
    qmd = cfg["src_dir"] / f"{stem}.qmd"
    raw = qmd.read_text(encoding="utf-8")
    src_fm, _ = split_frontmatter(raw)
    gfm = render_gfm(qmd, cfg["bib"])
    _, body = split_frontmatter(gfm)         # drop any FM Quarto emitted
    body = strip_first_h1(body)              # drop the title H1 if present
    body = clean(body, cfg["img_dest"])
    fm = build_frontmatter(src_fm or f'title: "{stem}"\ndraft: false', weight)
    bundle = ROOT / "content/blog" / cfg["section"] / slug
    bundle.mkdir(parents=True, exist_ok=True)
    (bundle / "index.md").write_text(fm + body, encoding="utf-8")
    print(f"  wrote {bundle/'index.md'}")


def main():
    course = sys.argv[1]
    only = sys.argv[2] if len(sys.argv) > 2 else None
    cfg = COURSES[course]
    if cfg["img_src"] and cfg["img_src"].is_dir():
        dest = ROOT / "static/images" / cfg["img_dest"]
        dest.mkdir(parents=True, exist_ok=True)
        subprocess.run(["cp", "-rn", f"{cfg['img_src']}/.", str(dest)], check=False)
        print(f"copied images -> {dest}")
    for i, (stem, slug) in enumerate(cfg["posts"], start=1):
        if only and slug != only:
            continue
        print(f"Converting {course}/{slug} (w{i*10})")
        convert(cfg, stem, slug, i * 10)


if __name__ == "__main__":
    main()
