/*!
 * Themy (v1.0.0): tools/util/index.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Load plugins
export {
  src, dest, series, parallel, lastRun, watch, tree,
  bgBlue, bgRed, cyan, green, magenta, red, $, bs, fs, glob
} from './plugins';

// Settings
export { isTheme, isProduction, isClean } from './settings';

// Configuration
export { dirs, paths } from './config';

// Options
export { opts } from './options';

// Template for banner to add to file headers
export { banner } from './banner';
