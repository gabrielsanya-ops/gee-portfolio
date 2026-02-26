// PROJECT_PLACEHOLDER_01 — GEE script. Do not call ui.root.clear().
var CONFIG = {
  aoiSource: 'drawn',
  aoiAssetId: 'REPLACE_ME_ASSET_ID',
  startDate: 'REPLACE_ME_START',
  endDate: 'REPLACE_ME_END',
  exportMapName: 'REPLACE_ME_MAP',
  exportTableName: 'REPLACE_ME_TABLE',
  scale: 30
};

var aoi = null;
if (CONFIG.aoiSource === 'asset' && CONFIG.aoiAssetId && CONFIG.aoiAssetId.indexOf('REPLACE_ME') < 0) {
  aoi = ee.FeatureCollection(CONFIG.aoiAssetId).geometry();
} else {
  try {
    aoi = typeof geometry !== 'undefined' ? geometry : null;
  } catch (e) {
    aoi = null;
  }
}
if (!aoi) print('Set AOI (draw or asset).');

var start = CONFIG.startDate;
var end = CONFIG.endDate;
var img = ee.Image.constant(0).rename('placeholder').clip(aoi);
Map.addLayer(img, { min: 0, max: 1 }, 'Placeholder', false);
print('Date range:', start, 'to', end);
// Export.image.toDrive({ image: img, description: CONFIG.exportMapName, scale: CONFIG.scale, region: aoi });
// Export.table.toDrive({ collection: ee.FeatureCollection([]), description: CONFIG.exportTableName, fileFormat: 'CSV' });
