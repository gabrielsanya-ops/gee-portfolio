// Busia County Decision-Maker Dashboard (Land Cover, NDVI, Rainfall, Night-lights, Flood Risk)
// Paste your existing GEE dashboard script below.
// This file holds CONFIG and basic project metadata only.
// Do not call ui.root.clear() here.

var CONFIG = {
  aoiSource: 'asset',
  aoiAssetId: 'REPLACE_ME_BUSIA_AOI_ASSET',
  startDate: '2017-01-01',
  endDate: '2024-12-31',
  exportMapName: 'REPLACE_ME_BUSIA_DASHBOARD_MAP',
  exportTableName: 'REPLACE_ME_BUSIA_DASHBOARD_TABLE',
  scale: 30
};

var aoi = null;
try {
  aoi = ee.FeatureCollection(CONFIG.aoiAssetId).geometry();
} catch (e) {
  aoi = null;
}

print('Project:', 'Busia County Decision-Maker Dashboard (Land Cover, NDVI, Rainfall, Night-lights, Flood Risk)');
print('AOI source:', CONFIG.aoiSource);
print('Period:', CONFIG.startDate, 'to', CONFIG.endDate);
if (!aoi) {
  print('REPLACE_ME: ensure Busia AOI asset is available and update CONFIG.aoiAssetId.');
}

// Paste your dashboard code here (data loading, indicators, charts, and exports).

