// GEE script template. Config at top; supports drawn geometry, user asset, or GeoJSON import.
// Do not call ui.root.clear().

// --- Config (inline or load from config.js) ---
var CONFIG = {
  aoiSource: 'drawn',
  aoiAssetId: 'REPLACE_ME_ASSET_ID',
  startDate: 'REPLACE_ME_START',
  endDate: 'REPLACE_ME_END',
  exportMapName: 'REPLACE_ME_MAP',
  exportTableName: 'REPLACE_ME_TABLE',
  scale: 30
};

// --- AOI: drawn geometry OR user asset OR GeoJSON import ---
var aoi = null;
if (CONFIG.aoiSource === 'asset' && CONFIG.aoiAssetId && CONFIG.aoiAssetId.indexOf('REPLACE_ME') < 0) {
  aoi = ee.FeatureCollection(CONFIG.aoiAssetId);
  if (aoi.size().getInfo() > 0) {
    aoi = aoi.geometry();
  }
} else if (CONFIG.aoiSource === 'geojson') {
  // Import from assets/sample_aoi.geojson: upload to GEE as asset and set aoiAssetId to that asset, or paste GeoJSON here.
  var sampleGeoJSON = {}; // REPLACE_ME: ee.Geometry or ee.FeatureCollection from GeoJSON
  aoi = sampleGeoJSON;
} else {
  // Drawn geometry: user draws a shape in Code Editor and names it (e.g. geometry)
  try {
    aoi = typeof geometry !== 'undefined' ? geometry : null;
  } catch (e) {
    aoi = null;
  }
}
if (!aoi) {
  print('REPLACE_ME: Set AOI (draw geometry, set asset, or load GeoJSON).');
}

// --- Date range ---
var start = CONFIG.startDate;
var end = CONFIG.endDate;

// --- Example: placeholder image and clip (replace with real dataset) ---
var placeholder = ee.Image.constant(0).rename('placeholder').clip(aoi);
Map.addLayer(placeholder, { min: 0, max: 1 }, 'Placeholder', false);

// --- Print key outputs ---
print('AOI (approx area km²):', aoi ? ee.Number(aoi.area().divide(1e6)).getInfo() : 'N/A');
print('Date range:', start, 'to', end);

// --- Export stubs (uncomment and fill when ready) ---
// Export.image.toDrive({ image: placeholder, description: CONFIG.exportMapName, scale: CONFIG.scale, region: aoi });
// Export.table.toDrive({ collection: ee.FeatureCollection([]), description: CONFIG.exportTableName, fileFormat: 'CSV' });
