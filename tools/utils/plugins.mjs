/*!
 * Themy (v1.0.2): tools/utils/plugins.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Importing specific gulp API functions lets us write them as series() instead of gulp.series()
import gulp from 'gulp';
export const { src, dest, series, parallel, lastRun, watch, tree } = gulp;

// Fetch command line arguments for development or production environment
// see: ./settings.js

// Fancy log with colors
import log from 'fancy-log';
export const fancyLog = log;
import colors from 'ansi-colors';
export const { bgBlue, bgRed, cyan, green, magenta, red } = colors;

// Load global modules
import * as fs from 'fs';
import browserSync from 'browser-sync';
const bs = browserSync.create();
import debug from 'gulp-debug';
import { deleteAsync as del } from 'del';
import glob from 'glob';
const { sync } = glob;
import gulpif from 'gulp-if';
import hash from 'gulp-hash-filename';
import header from 'gulp-header';
import prettier from 'gulp-prettier';
import rename from 'gulp-rename';
import zip from 'gulp-zip';
import size from 'gulp-size';

export { fs, bs, debug, del, gulpif, hash, header, prettier, rename, size, sync, zip };
