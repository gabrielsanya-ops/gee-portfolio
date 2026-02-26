# Publishing checklist (GitHub Pages)

Use this list before and after publishing the portfolio site from `/docs`.

- [ ] Replace all `REPLACE_ME` placeholders in `README.md`, `docs/`, and project READMEs with real content or remove.
- [ ] Run `python tools/validate_repo.py` and fix any reported issues (broken links, oversized files, missing project structure).
- [ ] Create a project manifest (CSV or JSON) with columns/keys: project, theme, region, period, data, link, status.
- [ ] Run `python tools/extract_project_manifest.py --input <manifest>` to update `docs/portfolio.md` and the root README project table.
- [ ] Add PNGs to `projects/*/results/maps/` as needed, then run `python tools/make_gallery.py` to refresh `docs/index.md` gallery.
- [ ] Ensure no secrets or private Earth Engine asset IDs are in the repo.
- [ ] On GitHub: **Settings → Pages → Source**: choose **Deploy from a branch**, Branch **main** (or your default), folder **/docs**.
- [ ] Save and wait for deployment. Site URL will be `https://<username>.github.io/gee-portfolio/` (or your repo name).
- [ ] Open the Pages URL and check that index, portfolio, and project links work.
