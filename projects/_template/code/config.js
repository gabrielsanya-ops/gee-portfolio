/**
 * Configuration for this GEE project.
 * Copy into Code Editor or load via script; do not commit secrets or private asset IDs.
 */
var CONFIG = {
  // Area of interest: 'drawn' | 'asset' | 'geojson'
  aoiSource: 'drawn',
  // User asset ID (only if aoiSource === 'asset'). Use public IDs or REPLACE_ME.
  aoiAssetId: 'REPLACE_ME_ASSET_ID',
  // Start and end dates (YYYY-MM-DD)
  startDate: 'REPLACE_ME_START',
  endDate: 'REPLACE_ME_END',
  // Export names (no paths; GEE exports to Drive or Tasks)
  exportMapName: 'REPLACE_ME_MAP',
  exportTableName: 'REPLACE_ME_TABLE',
  // Optional: scale in meters for exports
  scale: 30
};
