# Busia County VIIRS Night-lights Trends by Constituency (ADM2_EN) 2019–2025

## Objective

Analyse VIIRS night-time lights trends for Busia County constituencies and rank areas by change in illumination as a proxy for service or economic activity.

## Study area

- **Region**: Busia County, Kenya
- **AOI source**: Busia constituency boundaries asset (REPLACE_ME_BUSIA_BOUNDARIES_ASSET) with field `ADM2_EN`.

## Time period

- **Start**: 2019-01-01
- **End**: 2025-12-31

## Datasets

- VIIRS Monthly Night Lights (`NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG`, band `avg_rad`)
- Busia constituency boundaries asset with `ADM2_EN` attribute (REPLACE_ME_BUSIA_BOUNDARIES_ASSET)

## Methods

- Filter VIIRS monthly night lights to Busia County and the 2019–2025 period.
- Aggregate `avg_rad` per month and per constituency (ADM2_EN).
- Fit a linear trend for each constituency over time.
- Derive illuminated area statistics (e.g. threshold 0.5) for each constituency.
- Rank constituencies by trend and summarise results in tables and charts.

## Parameters

| Parameter | Value | Unit / notes |
|-----------|-------|--------------|
| Period | 2019-01-01 to 2025-12-31 | analysis window |
| Threshold | 0.5 | for illuminated area (REPLACE_ME_CONFIRM) |
| Geometry field | ADM2_EN | constituency name field |

## Outputs

### Maps

- Constituency-level maps coloured by night-lights trend or level.

Placeholder PNG export:

![Busia VIIRS trends map](results/maps/REPLACE_ME_BUSIA_VIIRS_TRENDS_MAP.png)

### Charts

- Time series and trend charts per constituency (REPLACE_ME_CHART_DETAILS).

### Tables

- Constituency ranking tables with trend statistics in `results/tables/`.

## Exports

- PNG trend map: REPLACE_ME_BUSIA_VIIRS_TRENDS_MAP.
- CSV ranking table: REPLACE_ME_BUSIA_VIIRS_TRENDS_TABLE.

## Validation checks

- [ ] Boundaries asset aligns with Busia County and has ADM2_EN field.
- [ ] VIIRS time series covers 2019–2025 without major gaps.
- [ ] Trends are stable and not dominated by outliers.
- [ ] No private asset IDs appear in this README or code.

## Limits and risks

- Night-lights as a proxy for services has limitations (e.g. saturation, noise).
- Administrative boundary changes or geometry errors can affect results.
- Cloud and atmospheric effects may still influence VIIRS measurements.

## How to reproduce

1. Open the Code Editor script: `https://code.earthengine.google.com/` (replace with project share link when ready).
2. Load the Busia constituency boundaries asset and confirm the ADM2_EN field.
3. Confirm the analysis period is 2019-01-01 to 2025-12-31.
4. Run the script to compute trends and illuminated area metrics.
5. Export the trend map and ranking tables to Drive and save them into `results/maps/` and `results/tables/`.

## Code Editor link

- Code Editor share link: REPLACE_ME_BUSIA_VIIRS_TRENDS_CODE_EDITOR_LINK (currently `https://code.earthengine.google.com/`).

