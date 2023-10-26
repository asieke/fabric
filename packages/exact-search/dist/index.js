"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ExactSearch: () => search_default
});
module.exports = __toCommonJS(src_exports);

// src/search.ts
var Search = class {
  constructor({ data, indexFields, resultFields, indexWeights = [] }) {
    this.data = data;
    this.indexFields = indexFields;
    this.resultFields = resultFields;
    this.indexWeights = indexWeights.length > 0 ? indexWeights : new Array(indexFields.length).fill(1);
  }
  search(query) {
    const results = [];
    this.data.forEach((item) => {
      let temp = { match: null, score: 0, count: null };
      this.indexFields.forEach((field, i) => {
        const startIndex = item[field].toLowerCase().indexOf(query.toLowerCase());
        if (startIndex !== -1) {
          const count = item[field].toLowerCase().split(query.toLowerCase()).length - 1;
          const words = item[field].split(" ").length;
          this.resultFields.forEach((resultField) => {
            temp[resultField] = item[resultField];
          });
          const substr = item[field].substring(startIndex, startIndex + 20);
          temp.match = __spreadProps(__spreadValues({}, temp.match), { [field]: substr });
          temp.score += count / words;
          temp.count = __spreadProps(__spreadValues({}, temp.count), { [field]: count / words });
        }
      });
      if (temp.match) {
        results.push(temp);
      }
    });
    results.sort((a, b) => b.score - a.score);
    return results;
  }
};
var search_default = Search;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExactSearch
});
//# sourceMappingURL=index.js.map