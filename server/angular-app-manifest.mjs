
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/<repo-name>/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/%3Crepo-name%3E"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16484, hash: 'f128b29ac66b31d89eab582d60b70afe4b6488d55dedb6926f38b0fed1723878', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16997, hash: '3b9239931f5eadc296b9a1b3a3a1a03620703dde5d1bf29f9125d8fa575bf2c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
