
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://littlelulu0105.github.io/<repo-name>/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/%3Crepo-name%3E"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16516, hash: 'e1c8195ad57ce76c756b3fc53ba0f09849153a62eddbad160c0a1460caae8ca6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17029, hash: '3b8e9a4d88ca3a4f3baf4980b91f2f2ef94dc9f2236086b563df11f03004dc10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
