#!/usr/bin/env python3
"""
Read a CSV or JSON manifest and update docs/portfolio.md and the root README project table.
Uses placeholders when values are missing.
"""
import argparse
import csv
import json
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS = REPO_ROOT / "docs"
README = REPO_ROOT / "README.md"
PORTFOLIO = DOCS / "portfolio.md"

TABLE_KEYS = ("project", "theme", "region", "period", "data", "link", "status")
PLACEHOLDER = "REPLACE_ME"


def load_manifest(path: Path) -> list[dict]:
    path = Path(path)
    if not path.exists():
        return []
    text = path.read_text(encoding="utf-8").strip()
    if path.suffix.lower() == ".json":
        data = json.loads(text)
        return data if isinstance(data, list) else [data]
    rows = list(csv.DictReader(text.splitlines()))
    return rows


def row_to_cells(row: dict) -> list[str]:
    return [
        (row.get(k) or row.get(k.upper()) or PLACEHOLDER).strip()[:80]
        for k in TABLE_KEYS
    ]


def build_table(rows: list[dict]) -> str:
    header = "| " + " | ".join(k.capitalize() for k in TABLE_KEYS) + " |"
    sep = "|" + "|".join(["---"] * len(TABLE_KEYS)) + "|"
    lines = [header, sep]
    if not rows:
        lines.append(
            "| "
            + " | ".join(PLACEHOLDER for _ in TABLE_KEYS)
            + " |"
        )
    else:
        for row in rows:
            cells = row_to_cells(row)
            lines.append("| " + " | ".join(cells) + " |")
    return "\n".join(lines)


def update_readme_table(table: str) -> None:
    if not README.exists():
        return
    text = README.read_text(encoding="utf-8")
    pattern = r"(<!-- BEGIN:PROJECT_TABLE -->\s*)\n.*?\n(.*?)(\s*<!-- END:PROJECT_TABLE -->)"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        new_block = match.group(1) + "\n" + table + "\n" + match.group(3)
        text = text[: match.start()] + new_block + text[match.end() :]
        README.write_text(text, encoding="utf-8")


def update_portfolio_md(table: str) -> None:
    PORTFOLIO.parent.mkdir(parents=True, exist_ok=True)
    if PORTFOLIO.exists():
        text = PORTFOLIO.read_text(encoding="utf-8")
        pattern = r"(---\s*\n.*?\n---\s*\n\n# Project catalog\n\n)(.*?)(\n\nReplace placeholders)"
        match = re.search(pattern, text, re.DOTALL)
        if match:
            text = match.group(1) + table + match.group(3)
        else:
            text = text.replace("| Project |", "PLACEHOLDER_TABLE")  # fallback
            text = text.replace("PLACEHOLDER_TABLE", table, 1)
    else:
        text = "---\ntitle: Project catalog\n---\n\n# Project catalog\n\n" + table + "\n\nReplace placeholders with real values or run the extract script with your manifest.\n"
    PORTFOLIO.write_text(text, encoding="utf-8")


def main() -> None:
    ap = argparse.ArgumentParser(description="Extract project manifest into docs and README table.")
    ap.add_argument("--input", "-i", type=Path, default=None, help="Path to CSV or JSON manifest.")
    args = ap.parse_args()
    path = args.input
    if path is None:
        path = REPO_ROOT / "manifest.csv"
    if not path.is_absolute():
        path = REPO_ROOT / path
    rows = load_manifest(path)
    table = build_table(rows)
    update_readme_table(table)
    update_portfolio_md(table)
    print("Updated README project table and docs/portfolio.md.")


if __name__ == "__main__":
    main()
