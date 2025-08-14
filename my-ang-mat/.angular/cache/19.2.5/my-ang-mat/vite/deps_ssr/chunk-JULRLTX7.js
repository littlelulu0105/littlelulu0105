import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  require_cjs
} from "./chunk-ZUJ64LXG.js";
import {
  __toESM
} from "./chunk-YHCV7DAQ.js";

// node_modules/@angular/cdk/fesm2022/data-source-5320b6fd.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof import_rxjs.ConnectableObservable);
}

export {
  DataSource,
  isDataSource
};
//# sourceMappingURL=chunk-JULRLTX7.js.map
