# Tools

Scripts to maintain the portfolio repo. Run from the repo root or from `tools/` (paths are repo-root relative).

## extract_project_manifest.py

Reads a CSV or JSON manifest and updates the root README project table and `docs/portfolio.md`. Uses placeholders when values are missing.

**Usage**

```bash
python tools/extract_project_manifest.py --input path/to/manifest.csv
python tools/extract_project_manifest.py --input path/to/manifest.json
```

If `--input` is omitted, uses `manifest.csv` in the repo root.

**Manifest format**

- **CSV**: header row with columns `project`, `theme`, `region`, `period`, `data`, `link`, `status`.
- **JSON**: array of objects with the same keys.

## make_gallery.py

Scans `projects/*/results/maps/` for PNG files and builds the gallery section in `docs/index.md` (between `<!-- BEGIN:GALLERY -->` and `<!-- END:GALLERY -->`).

**Usage**

```bash
python tools/make_gallery.py
```

## validate_repo.py

- Checks Markdown files for broken internal links (skips `http`, `https`, `#`, and `REPLACE_ME` links).
- Flags any file larger than 50 MB.
- Ensures each project under `projects/` (except `_template`) has `README.md`, `code/`, and `results/`.

**Usage**

```bash
python tools/validate_repo.py
```

Prints `PASS` or `FAIL` and lists issues.
