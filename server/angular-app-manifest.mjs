
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://littlelulu0105.github.io/<your-repo-name>/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/%3Cyour-repo-name%3E"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16521, hash: 'de71ef41b4062fda00400549bffd21bc313980c8dba27e1f8dd39753aae0b9f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17034, hash: 'dae05d7d2052b7d0a3f01150b244cfe2c7967ccb14e90fab1c467ad17fbf5b40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
