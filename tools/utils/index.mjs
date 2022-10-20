/*!
 * Themy (v1.0.2): tools/utils/index.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Load plugins
export {
  src, dest, series, parallel, lastRun, watch, tree,
  fancyLog, bgBlue, bgRed, cyan, green, magenta, red,
  fs, bs, debug, del, gulpif, hash, header, prettier, rename, size, sync, zip
} from './plugins.mjs';

// Settings
export {
  pkg, title, time, arg, isTheme, isProduction, isClean, isArchive,
  destTarget, cleanDest, getDateStr
} from './settings.mjs';

// Configuration
export { dirs, paths } from './paths.mjs';

// Options
export { opts } from './options.mjs';

// Template for banner to add to file headers
export { banner } from './banner.mjs';
