# Busia County Decision-Maker Dashboard (Land Cover, NDVI, Rainfall, Night-lights, Flood Risk)

## Objective

Provide a county-scale dashboard for Busia County decision-makers that tracks land cover, vegetation condition, rainfall, night-time lights, and flood risk.

## Study area

- **Region**: Busia County, Kenya
- **AOI source**: Busia AOI asset (REPLACE_ME_BUSIA_AOI_ASSET) and Budalangi 15 km buffer.

## Time period

- **Start**: 2017-01-01
- **End**: 2024-12-31

## Datasets

- Dynamic World land cover (`GOOGLE/DYNAMICWORLD/V1`)
- Sentinel-2 Surface Reflectance (`COPERNICUS/S2_SR`)
- CHIRPS Daily rainfall (`UCSB-CHG/CHIRPS/DAILY`)
- VIIRS annual night lights (`NOAA/VIIRS/DNB/ANNUAL_V21`)
- VIIRS monthly night lights (`NOAA/VIIRS/DNB/MONTHLY_V1_VCMCFG`)
- JRC Global Surface Water (`JRC/GSW1_4/GlobalSurfaceWater`)
- SRTM DEM (`USGS/SRTMGL1_003`)
- Busia AOI asset (REPLACE_ME_BUSIA_AOI_ASSET)

## Methods

- Prepare county and Budalangi buffer geometries from the Busia AOI asset.
- Summarise Dynamic World land cover changes over time.
- Compute NDVI/vegetation signals and rainfall aggregates for the county.
- Extract night-time lights metrics from VIIRS annual and monthly products.
- Use JRC Global Surface Water and SRTM DEM to flag potential flood-prone areas.
- Combine indicators into dashboard-ready tables and map layers.

## Parameters

| Parameter | Value | Unit / notes |
|-----------|-------|--------------|
| Period | 2017-01-01 to 2024-12-31 | analysis window |
| Spatial unit | Busia County, Budalangi buffer | REPLACE_ME_SUBUNITS |
| Scale | REPLACE_ME_SCALE | meters (depends on dataset) |

## Outputs

### Maps

- Land cover and land cover change maps.
- NDVI, rainfall, night-lights, and flood risk layers.

Placeholder PNG export:

![Busia dashboard map](results/maps/REPLACE_ME_BUSIA_DASHBOARD_MAP.png)

### Charts

- Time series for NDVI, rainfall, and night-lights by sub-area (REPLACE_ME_CHART_DETAILS).

### Tables

- Indicator tables summarised per county / buffer (e.g. CSV in `results/tables/`).

## Exports

- Dashboard map PNG: REPLACE_ME_BUSIA_DASHBOARD_MAP.
- Indicator CSV tables: REPLACE_ME_BUSIA_DASHBOARD_TABLE.

## Validation checks

- [ ] AOI and Budalangi buffer geometries are correct.
- [ ] All datasets load for the full 2017–2024 period.
- [ ] Night-lights, rainfall, and land cover indicators match known patterns.
- [ ] No private asset IDs are stored in this README or code.

## Limits and risks

- Input dataset limitations (resolution, temporal coverage, and noise).
- Uncertainty in flood risk layers derived from DEM and surface water history.
- Interpretation of night-lights as economic proxy has caveats.

## How to reproduce

1. Open the Code Editor script: `https://code.earthengine.google.com/` (replace with project share link when ready).
2. Ensure the Busia AOI asset and Budalangi buffer geometries exist in your account.
3. Confirm the analysis period is 2017-01-01 to 2024-12-31.
4. Run the script to generate dashboard layers, charts, and exports.
5. Save PNGs and tables into `results/maps/` and `results/tables/` in this folder.

## Code Editor link

- Code Editor share link: REPLACE_ME_BUSIA_DASHBOARD_CODE_EDITOR_LINK (currently `https://code.earthengine.google.com/`).

