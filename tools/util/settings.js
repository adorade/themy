/*!
 * Themy (v1.0.0): tools/util/settings.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export const pkg = require(`${process.cwd()}/package.json`);
export const year = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
).getFullYear();

// Pass Arguments to gulp tasks
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

// For ThemeForest theme (Default: false)
// set to 'true' with command line option: '--theme'
export const isTheme = arg.theme ? arg.theme : false;

// Production mode (Default: false)
// set to 'true' with command line option: '--production' or '--prod'
export const isProduction = arg.production || arg.prod ? arg.production || arg.prod : false;

export const destTarget = isTheme
  ? `release/v${pkg.version}`
  : isProduction
    ? 'dist'
    : 'tmp';

// end of settings
