// Aljouf Sentinel-2 Land Cover Classification (RF + NDVI/NDWI)
// Paste your existing GEE script logic for this project below.
// This file only stores lightweight CONFIG and print statements.
// Do not call ui.root.clear() here.

var CONFIG = {
  aoiSource: 'drawn', // 'drawn' | 'asset' | 'geojson'
  aoiAssetId: 'REPLACE_ME_ALJOUF_AOI_ASSET',
  startDate: '2024-01-01',
  endDate: '2024-06-30',
  exportMapName: 'REPLACE_ME_ALJOUF_LC_MAP',
  exportTableName: 'REPLACE_ME_ALJOUF_TABLE',
  scale: 10
};

// AOI placeholder: adapt to match your script.
var aoi = null;
try {
  aoi = typeof geometry !== 'undefined' ? geometry : null;
} catch (e) {
  aoi = null;
}

print('Project:', 'Aljouf Sentinel-2 Land Cover Classification (RF + NDVI/NDWI)');
print('AOI source:', CONFIG.aoiSource);
print('Period:', CONFIG.startDate, 'to', CONFIG.endDate);
if (!aoi) {
  print('REPLACE_ME: set AOI geometry or asset for Aljouf.');
}

// Paste the rest of your classification workflow here (data loading, indices, RF training, classification, exports).

