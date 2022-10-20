/*!
 * Themy (v1.0.2): tools/tasks/vendors.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, paths, opts,
  fs, bs, del, size /*, debug */
} from '../utils/index.mjs';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanVendor (done) {
  if (fs.existsSync(paths.vendors.del)) {
    fancyLog(`${green('-> Clean all styles')} in ${magenta(paths.vendors.del)} folder`);
    await del(paths.vendors.del);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanVendor.displayName = 'clean:vendor';
cleanVendor.description = 'Clean up vendor folders';

export function vendorCss () {
  fancyLog(`${green('-> Copying vendor CSS files...')}`);
  return src(paths.vendors.src.css, {
    since: lastRun(vendorCss)
  })
    // .pipe(concat('main.css'))
    .pipe(size(opts.size))
    .pipe(dest(paths.vendors.dest.css))
    .pipe(bs.stream({ match: '**/*.css' }));
}
vendorCss.displayName = 'vendor:css';
vendorCss.description = 'Copy vendor CSS files';

export function vendorJs () {
  fancyLog(`${green('-> Copying vendor JS files...')}`);
  return src(paths.vendors.src.js, {
    since: lastRun(vendorJs)
  })
    // .pipe(concat('main.js'))
    .pipe(size(opts.size))
    .pipe(dest(paths.vendors.dest.js))
    .pipe(bs.stream({ match: '**/*.js' }));
}
vendorJs.displayName = 'vendor:js';
vendorJs.description = 'Copy vendor JS files';
