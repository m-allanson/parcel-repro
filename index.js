"use strict";

const path = require("color-name");

const result = {};
for (const file in require.cache) {
  if (/color/g.test(file)) {
    result[file] = true;
  }
}

console.log(Object.keys(result));
