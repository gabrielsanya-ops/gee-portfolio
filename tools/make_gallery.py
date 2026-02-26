#!/usr/bin/env python3
"""
Scan projects/*/results/maps for PNG files and build gallery blocks in docs/index.md.
"""
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
PROJECTS = REPO_ROOT / "projects"
DOCS_INDEX = REPO_ROOT / "docs" / "index.md"

GALLERY_START = "<!-- BEGIN:GALLERY -->"
GALLERY_END = "<!-- END:GALLERY -->"


def find_map_images() -> list[tuple[str, str]]:
    entries = []
    if not PROJECTS.is_dir():
        return entries
    for proj_dir in sorted(PROJECTS.iterdir()):
        if not proj_dir.is_dir() or proj_dir.name.startswith("_"):
            continue
        maps_dir = proj_dir / "results" / "maps"
        if not maps_dir.is_dir():
            continue
        for p in sorted(maps_dir.glob("*.png")):
            rel = p.relative_to(REPO_ROOT)
            link = f"../{rel.as_posix()}"
            label = f"{proj_dir.name} — {p.name}"
            entries.append((link, label))
    return entries


def build_gallery_md(entries: list[tuple[str, str]]) -> str:
    if not entries:
        return "*No PNGs in projects/*/results/maps. Add images and re-run.*"
    lines = []
    for link, label in entries:
        lines.append(f"- [{label}]({link})")
        lines.append(f"  ![{label}]({link})")
    return "\n".join(lines)


def main() -> None:
    entries = find_map_images()
    gallery = build_gallery_md(entries)
    if not DOCS_INDEX.exists():
        DOCS_INDEX.parent.mkdir(parents=True, exist_ok=True)
        DOCS_INDEX.write_text(
            "---\ntitle: GEE Portfolio\n---\n\n# GEE Portfolio\n\n"
            + GALLERY_START + "\n" + gallery + "\n" + GALLERY_END + "\n",
            encoding="utf-8",
        )
        print("Created docs/index.md with gallery.")
        return
    text = DOCS_INDEX.read_text(encoding="utf-8")
    if GALLERY_START not in text or GALLERY_END not in text:
        print("Gallery markers not found in docs/index.md; skipping.")
        return
    before, rest = text.split(GALLERY_START, 1)
    _, after = rest.split(GALLERY_END, 1)
    new_text = before + GALLERY_START + "\n" + gallery + "\n" + GALLERY_END + after
    DOCS_INDEX.write_text(new_text, encoding="utf-8")
    print("Updated docs/index.md gallery.")


if __name__ == "__main__":
    main()
