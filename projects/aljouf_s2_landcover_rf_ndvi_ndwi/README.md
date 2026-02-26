# Aljouf Sentinel-2 Land Cover Classification (RF + NDVI/NDWI)

## Objective

Map land cover classes in the Aljouf Region using Sentinel-2 Surface Reflectance and vegetation–water indices (NDVI, NDWI) with a Random Forest classifier.

## Study area

- **Region**: Aljouf Region, Saudi Arabia
- **AOI source**: geometry AOI in the GEE Code Editor (REPLACE_ME_AOI_GEOMETRY_OR_ASSET)

## Time period

- **Start**: 2024-01-01
- **End**: 2024-06-30

## Datasets

- Sentinel-2 Surface Reflectance Harmonized (`COPERNICUS/S2_SR_HARMONIZED`)
- NDVI (B8 - B4)
- NDWI (B3 - B8)
- Ground control point (GCP) training samples for classes:
  - urban, baresoil, trees, road, agriculture, sand, vegetation, water, rocks

## Methods

- Filter Sentinel-2 SR to the Aljouf AOI and analysis period.
- Mask clouds and shadows (REPLACE_ME_CLOUD_MASK_METHOD).
- Compute NDVI and NDWI bands and stack with selected spectral bands.
- Sample GCP training points per class and prepare a training feature collection.
- Train a Random Forest classifier (REPLACE_ME_RF_PARAMS).
- Classify the image over the AOI and derive land cover map.

## Parameters

| Parameter | Value | Unit / notes |
|-----------|-------|--------------|
| Classifier | Random Forest | REPLACE_ME_RF_PARAMS |
| Bands | REPLACE_ME_BANDS | e.g. B2, B3, B4, B8, NDVI, NDWI |
| Scale | REPLACE_ME_SCALE | meters |

## Outputs

### Maps

Placeholder export (replace with real file name when available):

![Aljouf land cover map](results/maps/REPLACE_ME_ALJOUF_LC_MAP.png)

### Charts

- REPLACE_ME: accuracy or class area charts (if produced).

### Tables

- REPLACE_ME: accuracy metrics or class area tables in `results/tables/`.

## Exports

- PNG land cover map: REPLACE_ME_ALJOUF_LC_MAP (e.g. `Export.image.toDrive`).
- CSV accuracy / area table: REPLACE_ME_ALJOUF_TABLE (e.g. `Export.table.toDrive`).

## Validation checks

- [ ] AOI covers the intended part of Aljouf Region.
- [ ] Date range is 2024-01-01 to 2024-06-30 in the script.
- [ ] Training samples include all listed classes.
- [ ] Classified map visually matches known land cover in the area.
- [ ] No private asset IDs are stored in this README or code.

## Limits and risks

- Sentinel-2 cloud contamination and shadow masking quality.
- Misclassification between spectrally similar classes (e.g. bare soil vs sand).
- NDVI/NDWI thresholds and RF configuration strongly affect results.

## How to reproduce

1. Open the Code Editor script: `https://code.earthengine.google.com/` (replace with project share link when ready).
2. Ensure the AOI geometry or asset is available in your account.
3. Check that the analysis period is 2024-01-01 to 2024-06-30.
4. Verify all training point layers are loaded and correctly labelled.
5. Run the script, inspect the classified map, and trigger exports for map and tables.

## Code Editor link

- Code Editor share link: REPLACE_ME_ALJOUF_CODE_EDITOR_LINK (currently `https://code.earthengine.google.com/`).

