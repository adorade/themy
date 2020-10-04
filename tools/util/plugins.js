/*!
 * Themy (v1.0.2): tools/util/plugins.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Importing specific gulp API functions lets us write them as series() instead of gulp.series()
export { src, dest, task, series, parallel, lastRun, watch, tree } from 'gulp';

// Load all plugins in "devDependencies" into the variable $
export const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  rename: {
    'gulp-stylelint': 'gStylelint',
    'gulp-eslint': 'gEslint',
    'gulp-pug-linter': 'pugLinter',
    'gulp-terser-js': 'gTerser',
    'gulp-hash-filename': 'hash'
  }
});

// Colors for fancy log
export { bgBlue, bgRed, cyan, green, magenta, red } from 'ansi-colors';

// Load others modules
export const bs = require('browser-sync').create();
export const fs = require('fs');
export { glob } from 'glob';
