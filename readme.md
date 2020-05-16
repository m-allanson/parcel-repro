# About

Issue reproduction for Parcel 2.0.0-alpha.3.2.

`require.cache` does not get transformed when outputting to esm format. This causes errors in the bundled file.

# Getting started

Ensure you're running node 12 or node 14, then:

- npm install

Run index file and view output:

- `npm run src`

Bundle to ES Module format:

- `npm run bundle`

Run esm bundled file and view output:

- `npm run dist`

Note that `npm run src` runs succesfully and `npm run dist` exits with the following error:

```
file:///<path>/parcel-repro/dist/index.js:4
for (const file in require.cache) {
                           ^

ReferenceError: require is not defined
    at file:///<path>/parcel-repro/dist/index.js:4:28
    at ModuleJob.run (internal/modules/esm/module_job.js:110:37)
    at async Loader.import (internal/modules/esm/loader.js:179:24)
```
