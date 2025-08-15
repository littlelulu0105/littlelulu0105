
export default {
  basePath: 'https://littlelulu0105.github.io/<your-repo-name>',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
