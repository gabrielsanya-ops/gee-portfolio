// Busia County VIIRS Night-lights Trends by Constituency (ADM2_EN) 2019–2025
// Paste your existing VIIRS trend analysis script below.
// This file stores CONFIG and basic metadata only.
// Do not call ui.root.clear() here.

var CONFIG = {
  aoiSource: 'asset',
  aoiAssetId: 'REPLACE_ME_BUSIA_BOUNDARIES_ASSET',
  startDate: '2019-01-01',
  endDate: '2025-12-31',
  exportMapName: 'REPLACE_ME_BUSIA_VIIRS_TRENDS_MAP',
  exportTableName: 'REPLACE_ME_BUSIA_VIIRS_TRENDS_TABLE',
  viirsThreshold: 0.5,
  scale: 500
};

var aoi = null;
try {
  aoi = ee.FeatureCollection(CONFIG.aoiAssetId).geometry();
} catch (e) {
  aoi = null;
}

print('Project:', 'Busia County VIIRS Night-lights Trends by Constituency (ADM2_EN) 2019–2025');
print('AOI source:', CONFIG.aoiSource);
print('Period:', CONFIG.startDate, 'to', CONFIG.endDate);
print('VIIRS threshold:', CONFIG.viirsThreshold);
if (!aoi) {
  print('REPLACE_ME: ensure Busia constituency boundaries asset is available and update CONFIG.aoiAssetId.');
}

// Paste your VIIRS time-series, trend fitting, and export logic here.

