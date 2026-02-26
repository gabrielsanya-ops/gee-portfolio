## gee-portfolio

This repository packages Google Earth Engine (GEE) Code Editor projects into a clean, reproducible portfolio. Each project lives under `projects/` with consistent structure for code, inputs, results, and documentation. Use it to publish a browsable catalog via GitHub Pages and to keep project metadata, outputs, and methods in one place.

### Tech stack

- **Google Earth Engine**: JavaScript (Code Editor) project scripts
- **Python 3**: repo tooling (`tools/`) for manifests, galleries, and validation
- **GitHub Pages**: static site under `docs/`
- **Markdown + CSS**: documentation and lightweight styling

### How to use this repo

- **Add projects**: copy `projects/_template/` to `projects/<PROJECT_SLUG>/`, then edit the per-project `README.md`, `code/main.js`, and `code/config.js`.
- **Store outputs**: place exported artifacts under `projects/<PROJECT_SLUG>/results/` (maps/charts/tables).
- **Publish a portfolio site**: keep `docs/` updated and enable GitHub Pages from `/docs`.

### Projects

The table below is designed to be updated by `tools/extract_project_manifest.py`.

<!-- BEGIN:PROJECT_TABLE -->
| Project | Theme | Region | Period | Data | Link | Status |
|---|---|---|---|---|---|---|
| Aljouf Sentinel-2 Land Cover Classification (RF + NDVI/NDWI) | Land cover mapping and vegetation-water indices | Aljouf Region, Saudi Arabia (geometry AOI) | 2024-01-01 to 2024-06-30 | Sentinel-2 Surface Reflectance Harmonized (COPERNICUS/S2_SR_HARMONIZED); NDVI (B | https://code.earthengine.google.com/ | finalised |
| Busia County Decision-Maker Dashboard (Land Cover, NDVI, Rainfall, Night-lights, | County-scale environmental and economic monitoring dashboard | Busia County, Kenya (BUSIA asset geometry) plus Budalangi 15 km buffer | 2017-01-01 to 2024-12-31 | Dynamic World (GOOGLE/DYNAMICWORLD/V1); Sentinel-2 SR (COPERNICUS/S2_SR); CHIRPS | https://code.earthengine.google.com/ | finalised |
| Busia County VIIRS Night-lights Trends by Constituency (ADM2_EN) 2019–2025 | Night-time lights trend and constituency ranking (service proxy) | Busia County, Kenya (constituency boundaries asset) | 2019-01-01 to 2025-12-31 | VIIRS Monthly Night Lights (NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG, avg_rad); Busia  | https://code.earthengine.google.com/ | finalised |

<!-- END:PROJECT_TABLE -->

### Reproducibility steps

- **Clone this repo**.
- **Open a project**: read `projects/<PROJECT_SLUG>/README.md`.
- **Run in GEE**:
  - Paste `projects/<PROJECT_SLUG>/code/main.js` into the Code Editor.
  - Adjust `projects/<PROJECT_SLUG>/code/config.js` values in `CONFIG`.
  - Use placeholders only until you provide real AOIs, datasets, and links.
- **Generate docs** (optional, local):
  - Create a manifest file (CSV or JSON) with your project metadata.
  - Run `python tools/extract_project_manifest.py --input REPLACE_ME_PATH_TO_MANIFEST`.
  - Run `python tools/make_gallery.py`.
  - Run `python tools/validate_repo.py`.

### Data and licensing notes

- **No secrets**: do not commit credentials, tokens, or private keys.
- **Earth Engine assets**: do not hardcode private asset IDs. Use `REPLACE_ME_*` placeholders or public IDs only.
- **Third-party datasets**: cite sources in each project. See `templates/dataset_citation_template.md`.
- **Repository license**: MIT (see `LICENSE`). Each project may have additional dataset licensing constraints.

### Contact

- **GitHub**: [gabrielsanya-ops](https://github.com/gabrielsanya-ops?tab=repositories)
- **Name**: REPLACE_ME_NAME
- **Email / website**: REPLACE_ME_CONTACT
