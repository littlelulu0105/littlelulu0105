
export default {
  basePath: 'https://littlelulu0105.github.io/<repo-name>',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
