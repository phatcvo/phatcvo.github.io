#!/usr/bin/env python3
"""Build the WebP thumbnails used on the home page.

Run from the repository root after adding or replacing a project image:
    python3 scripts/make-thumbs.py

Needs Pillow. Reads the project images named in config.yaml and writes to
static/images/projects/thumbs/. Animated GIFs use a frame three quarters of
the way through, where the demo has the most on screen.
"""
import re
from pathlib import Path

from PIL import Image

STATIC = Path("static")
OUT = STATIC / "images/projects/thumbs"
MAX_WIDTH = 1084  # two times the widest card image on desktop


def project_images():
    pattern = re.compile(r'^\s+image:\s*"?([^"\s]+)')
    for line in Path("config.yaml").read_text(encoding="utf-8").splitlines():
        match = pattern.match(line)
        if match:
            yield STATIC / match.group(1)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for path in project_images():
        image = Image.open(path)
        frames = getattr(image, "n_frames", 1)
        if frames > 1:
            image.seek(frames * 3 // 4)
        image = image.convert("RGB")
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.LANCZOS)
        target = OUT / f"{path.stem}.webp"
        image.save(target, "WEBP", quality=78, method=6)
        print(f"{target}  {image.width}x{image.height}  {target.stat().st_size // 1024} KB")

    photo = Image.open(STATIC / "images/profile.jpg").convert("RGB")
    side = min(photo.size)
    left, top = (photo.width - side) // 2, (photo.height - side) // 2
    photo = photo.crop((left, top, left + side, top + side)).resize((256, 256), Image.LANCZOS)
    photo.save(STATIC / "images/profile-256.webp", "WEBP", quality=82, method=6)


if __name__ == "__main__":
    main()
