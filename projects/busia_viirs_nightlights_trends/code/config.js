/**
 * CONFIG for Busia County VIIRS Night-lights Trends by Constituency (ADM2_EN) 2019–2025.
 * Replace placeholders before running in GEE.
 */
var CONFIG = {
  aoiSource: 'asset',
  aoiAssetId: 'REPLACE_ME_BUSIA_BOUNDARIES_ASSET',
  startDate: '2019-01-01',
  endDate: '2025-12-31',
  exportMapName: 'REPLACE_ME_BUSIA_VIIRS_TRENDS_MAP',
  exportTableName: 'REPLACE_ME_BUSIA_VIIRS_TRENDS_TABLE',
  viirsThreshold: 0.5,
  scale: 500 // typical VIIRS scale
};

