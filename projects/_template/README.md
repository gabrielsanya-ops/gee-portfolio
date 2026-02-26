# REPLACE_ME_PROJECT_TITLE

## Objective

REPLACE_ME: One or two sentences describing the goal of this GEE project.

## Study area

REPLACE_ME: Describe the area of interest (AOI). Use placeholders until you add real geometry or asset IDs.

- **Region**: REPLACE_ME_REGION
- **Source**: Drawn geometry in Code Editor, or user asset, or GeoJSON in `assets/`

## Time period

REPLACE_ME: Start and end dates for analysis.

- **Start**: REPLACE_ME_START_DATE
- **End**: REPLACE_ME_END_DATE

## Datasets

REPLACE_ME: List image/feature collections and versions. Do not include private asset IDs.

| Dataset | ID / name | Use |
|--------|-----------|-----|
| REPLACE_ME | REPLACE_ME | REPLACE_ME |

## Methods

- Step 1: REPLACE_ME
- Step 2: REPLACE_ME
- Step 3: REPLACE_ME
- (Add more as needed.)

## Parameters

| Parameter | Value | Unit / notes |
|-----------|--------|--------------|
| REPLACE_ME | REPLACE_ME | REPLACE_ME |

## Outputs

### Maps

![Map placeholder](results/maps/REPLACE_ME_MAP.png)

REPLACE_ME: Replace with real filename after exporting from GEE.

### Charts

REPLACE_ME: Link or describe charts in `results/charts/`.

### Tables

REPLACE_ME: Link or describe CSVs in `results/tables/`.

## Exports

- PNG map: REPLACE_ME (e.g. Export.image.toDrive)
- CSV table: REPLACE_ME (e.g. Export.table.toDrive)

## Validation checks

- [ ] AOI loads correctly in Code Editor
- [ ] Date range matches available data
- [ ] Exported outputs match README descriptions
- [ ] No private asset IDs in code or README

## Limits and risks

REPLACE_ME: Cloud cover, resolution, scale, or licensing limits.

## How to reproduce

1. Open [Code Editor link](REPLACE_ME_CODE_EDITOR_LINK) or paste `code/main.js` into the GEE Code Editor.
2. Set `CONFIG` in `code/config.js` (or inline) for AOI, dates, and export names.
3. Use drawn geometry, or load a user asset, or import GeoJSON from `assets/`.
4. Run the script and trigger exports as needed.
5. Save PNG/CSV outputs into `results/maps/`, `results/tables/` as in this README.
