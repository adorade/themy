/*!
 * Themy (v1.0.0): tools/tasks/release.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, $, green, magenta, paths
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanZip () {
  $.fancyLog(`${green('-> Clean up')} ${magenta(paths.release.dest)} file`);
  return $.del(paths.release.dest);
}
cleanZip.displayName = 'clean:js';
cleanZip.description = 'Clean up zip files';

export function archive () {
  $.fancyLog(`${green('-> Building theme')} ${magenta(paths.release.dest)} file`);
  return src(paths.release.src)
    .pipe($.zip(paths.release.dest))
    .pipe(dest('./'));
}
archive.displayName = 'zip:theme';
archive.description = 'Archive theme files';
