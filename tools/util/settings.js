/*!
 * Themy (v1.0.2): tools/util/settings.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { fs } from './plugins';

export const pkg = require(`${process.cwd()}/package.json`);
export const time = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
);

/**
 * Pass Arguments to gulp tasks
 * ========================================================================== */
const arg = (argList => {
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

// Clean all `dest` folders (Default: false)
// set to 'true' with command line option: '--clean'
export const isClean = arg.clean ? arg.clean : false;

// Production mode (Default: false)
// set to 'true' with command line option: '--production' or '--prod'
export const isProduction = arg.production || arg.prod ? arg.production || arg.prod : false;

// For ThemeForest theme (Default: false)
// set to 'true' with command line option: '--theme'
export const isTheme = arg.theme ? arg.theme : false;

// Release theme (Default: false)
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
  return dataObj.getUTCFullYear() +
    '' + pad(dataObj.getUTCMonth() + 1) +
    '' + pad(dataObj.getUTCDate()) +
    '-' + pad(dataObj.getUTCHours()) +
    '' + pad(dataObj.getUTCMinutes()) +
    '' + pad(dataObj.getUTCSeconds());
}
