import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ElementRef
} from "./chunk-4O3F4CIK.js";

// node_modules/@angular/cdk/fesm2022/element-08c51fcd.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

export {
  coerceNumberProperty,
  _isNumberValue,
  coerceElement
};
//# sourceMappingURL=chunk-F5BHRC5D.js.map
