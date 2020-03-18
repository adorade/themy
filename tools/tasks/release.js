/*!
 * Themy (v1.0.2): tools/tasks/release.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, $, green, magenta, fs, isStable, paths, opts
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanZip (done) {
  if (fs.existsSync(paths.release.dest)) {
    $.fancyLog(`${green('-> Clean up')} ${magenta(`${paths.release.dest}/${paths.release.file}`)} file`);
    return $.del(paths.release.del);
  } else {
    $.fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanZip.displayName = 'clean:js';
cleanZip.description = 'Clean up zip files';

export function archive () {
  $.fancyLog(`${green('-> Building theme')} ${magenta(paths.release.file)} file`);
  return src(paths.release.src)
    .pipe($.zip(paths.release.file, opts.zip))
    .pipe($.if(!isStable,
      $.hash(opts.hash)
    ))
    .pipe($.size(opts.size))
    .pipe(dest(paths.release.dest));
}
archive.displayName = 'zip:theme';
archive.description = 'Archive theme files';
