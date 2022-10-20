/*!
 * Themy (v2.0.0): gulpfile.esm.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { series, fancyLog, green, isTheme, isProduction, isArchive } from './tools/utils/index.mjs';
import {
  checks, help, clean,
  cleanCss, lintScss, compile, minifyCss,
  cleanJs, lintJs, transpile, minifyJs,
  cleanVendor, vendorCss, vendorJs,
  cleanImages, imagine, convert,
  cleanStatics, favicons, statica,
  cleanPages, lintPages, pagile, pagify,
  cleanZip, archive, serve
} from './tools/index.mjs';

if (isTheme) {
  fancyLog(`${green('Looks like you are building the theme!')}`);
} else if (isProduction) {
  fancyLog(`${green('Looks like you are in production mode!')}`);
} else {
  fancyLog(`${green('Looks like you are in development mode!')}`);
}

/**
 * Check dirs, paths, options and settings
 * -------------------------------------------------------------------------- */
export { checks, help };

/**
 * Clean - clean all files from 'dist' folder
 * -------------------------------------------------------------------------- */
export { clean };

/**
 * Build Theme
 * ========================================================================== */
/**
 * Styles - processes style files
 * -------------------------------------------------------------------------- */
const styles = series(lintScss, compile, minifyCss);
export const buildStyles = series(cleanCss, styles);
buildStyles.displayName = 'build:styles';
buildStyles.description = 'Build only styles files';

/**
 * Scripts - processes script files
 * -------------------------------------------------------------------------- */
const scripts = series(lintJs, transpile, minifyJs);
export const buildScripts = series(cleanJs, scripts);
buildScripts.displayName = 'build:scripts';
buildScripts.description = 'Build only scripts files';

/**
 * Vendors - processes vendor files
 * -------------------------------------------------------------------------- */
const vendors = series(vendorCss, vendorJs);
export const buildVendors = series(cleanVendor, vendors);
buildVendors.displayName = 'build:vendors';
buildVendors.description = 'Build only vendors files';

/**
 * Images - processes image files
 * -------------------------------------------------------------------------- */
const images = series(imagine, convert);
export const buildImages = series(cleanImages, images);
buildImages.displayName = 'build:images';
buildImages.description = 'Build only images files';

/**
 * Statics - processes static files
 * -------------------------------------------------------------------------- */
const statics = series(favicons, statica);
export const buildStatics = series(cleanStatics, statics);
buildStatics.displayName = 'build:statics';
buildStatics.description = 'Build statics files';

/**
 * Templates - processes templates files
 * -------------------------------------------------------------------------- */
const pages = series(lintPages, pagile, pagify);
export const buildPages = series(cleanPages, pages);
buildPages.displayName = 'build:pages';
buildPages.description = 'Build only html files';

/**
 * Release - pack your theme
 * -------------------------------------------------------------------------- */
const release = series(cleanZip, archive);
export const buildRelease = release;
buildRelease.displayName = 'build:release';
buildRelease.description = 'Build only release files';

/**
 * Define `build` task
 * -------------------------------------------------------------------------- */
export const build = isTheme || isArchive
  ? series(clean, styles, scripts, vendors, images, statics, pages, release)
  : series(clean, styles, scripts, vendors, images, statics, pages);
build.description = 'Build task for production';
build.flags = {
  '--clean': 'Clean all `dist` folders',
  '--prod': 'Production mode, for demo',
  '--theme': 'Build your theme',
  '--archive': 'Archive your release'
};

/**
 * Watch and Serve - watch files for changes and reload
 * Starts a BrowerSync instance
 * Watch files for changes
 * -------------------------------------------------------------------------- */
export { serve };

/**
 * Define `dev` task - build, edit source, reload
 * Runs all of the above tasks and then waits for files to change
 * -------------------------------------------------------------------------- */
const dev = series(build, serve);
dev.description = 'Development task with serve';

/**
 * Default task - build and serves the theme
 * ========================================================================== */
export default dev;
