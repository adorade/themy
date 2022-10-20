/*!
 * Themy (v2.0.0): tools/utils/settings.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { fs } from './index.mjs';

export const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
export const title = `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`;
export const time = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
);

/**
 * Pass Arguments to gulp tasks
 * -------------------------------------------------------------------------- */
export const arg = (argList => {
  let arg = {}, a, opt, thisOpt, curOpt;

  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^-+/, '');

    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    } else {
      // argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;
})(process.argv);

// Cleaning up all generated files (Default: false)
// set to 'true' with command line option: '--clean'
export const isClean = arg.clean ? arg.clean : false;

// Production mode (Default: false)
// set to 'true' with command line option: '--production' or '--prod'
export const isProduction = arg.production || arg.prod ? arg.production || arg.prod : false;

// For ThemeForest theme (Default: false)
// set to 'true' with command line option: '--theme'
export const isTheme = arg.theme ? arg.theme : false;

// Archive your theme (Default: false)
// set to 'true' with command line option: '--archive'
export const isArchive = arg.archive ? arg.archive : false;

/**
 * Dest folder for your theme
 * ========================================================================== */
export const destTarget = isTheme || isArchive
  ? `release/v${pkg.version}`
  : isProduction
    ? 'dist'
    : 'tmp';

/**
 * Clean and delete dist directory content
 * ========================================================================== */
const releaseDest = ['release', 'dist', 'tmp'];
let allDest = [], oneDest = [];
for (let i = 0; i < releaseDest.length; i++) {
  if (fs.existsSync(releaseDest[i])) {
    allDest.push(releaseDest[i]);
  }
}

if (fs.existsSync(destTarget)) {
  oneDest.push(destTarget);
}
export const cleanDest = isClean ? allDest : oneDest;

/**
 * Add time hash to release archive
 * ========================================================================== */
const pad = number => `0${number}`.slice(-2);

export function getDateStr (dataObj) {
  return dataObj.getFullYear() +
    '' + pad(dataObj.getMonth() + 1) +
    '' + pad(dataObj.getDate()) +
    '-' + pad(dataObj.getHours()) +
    '' + pad(dataObj.getMinutes()) +
    '' + pad(dataObj.getSeconds());
}
