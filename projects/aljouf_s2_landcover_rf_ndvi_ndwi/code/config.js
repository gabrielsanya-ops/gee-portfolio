/**
 * CONFIG for Aljouf Sentinel-2 Land Cover Classification (RF + NDVI/NDWI).
 * Replace placeholders before running in GEE.
 */
var CONFIG = {
  aoiSource: 'drawn', // 'drawn' | 'asset' | 'geojson'
  aoiAssetId: 'REPLACE_ME_ALJOUF_AOI_ASSET',
  startDate: '2024-01-01',
  endDate: '2024-06-30',
  exportMapName: 'REPLACE_ME_ALJOUF_LC_MAP',
  exportTableName: 'REPLACE_ME_ALJOUF_TABLE',
  scale: 10 // Sentinel-2 nominal resolution
};

