#!/usr/bin/env python3
"""
Validate repo: broken links in Markdown, file size > 50 MB, and project structure (README, code, results).
Prints pass or fail summary.
"""
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
MAX_FILE_MB = 50
PROJECT_REQUIRED = ("README.md", "code", "results")


def find_md_files() -> list[Path]:
    return list(REPO_ROOT.rglob("*.md"))

def check_internal_links() -> list[str]:
    errors = []
    for md in find_md_files():
        try:
            text = md.read_text(encoding="utf-8")
        except Exception as e:
            errors.append(f"{md}: read error — {e}")
            continue
        rel_dir = md.parent
        for m in re.finditer(r"\]\s*\(\s*([^)\s]+)\s*\)", text):
            link = m.group(1).strip()
            if link.startswith("#") or link.startswith("http://") or link.startswith("https://") or link.startswith("mailto:"):
                continue
            if "REPLACE_ME" in link:
                continue
            target = (rel_dir / link).resolve()
            if target.exists():
                continue
            candidate = REPO_ROOT / link.lstrip("/")
            if candidate.exists():
                continue
            errors.append(f"{md.relative_to(REPO_ROOT)}: broken link → {link}")
    return errors


def check_file_sizes() -> list[str]:
    errors = []
    for f in REPO_ROOT.rglob("*"):
        if f.is_file() and f.stat().st_size > MAX_FILE_MB * 1024 * 1024:
            errors.append(f"{f.relative_to(REPO_ROOT)}: over {MAX_FILE_MB} MB")
    return errors


def check_project_structure() -> list[str]:
    errors = []
    projects_dir = REPO_ROOT / "projects"
    if not projects_dir.is_dir():
        return ["projects/ not found"]
    for proj in projects_dir.iterdir():
        if not proj.is_dir() or proj.name.startswith("_"):
            continue
        for name in PROJECT_REQUIRED:
            path = proj / name
            if not path.exists():
                errors.append(f"projects/{proj.name}: missing {name}")
    return errors


def main() -> None:
    link_errors = check_internal_links()
    size_errors = check_file_sizes()
    struct_errors = check_project_structure()
    all_errors = link_errors + size_errors + struct_errors
    if all_errors:
        print("FAIL")
        for e in all_errors:
            print("  ", e)
    else:
        print("PASS")


if __name__ == "__main__":
    main()
