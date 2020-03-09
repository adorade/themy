/*!
 * Themy (v1.0.0): tools/tasks/statics.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { src, dest, lastRun, $, bs, green, magenta, dirs, paths, opts } from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanStatics () {
  $.fancyLog(`${green('-> Clean up')} ${magenta(paths.statics.dest)} folder`);
  $.fancyLog(`${green('-> Clean up')} all ${magenta('conf')} files`);
  return $.del([paths.statics.dest, `${dirs.dest}/${paths.statics.ext}`]);
}
cleanStatics.displayName = 'clean:statics';
cleanStatics.description = 'Clean up statics folders';

export function favicons () {
  $.fancyLog(`${green('-> Copying favicons files...')}`);
  return src(paths.statics.src.icons, {
    since: lastRun(favicons)
  })
    .pipe($.size(opts.size))
    .pipe(dest(paths.statics.dest))
    .pipe(bs.stream({ match: '**/*.{ico,png,svg}' }));
}
favicons.displayName = 'favicons';
favicons.description = 'Copy favicons files';

export function statica () {
  $.fancyLog(`${green('-> Copying statics files...')}`);
  return src(paths.statics.src.conf, {
    since: lastRun(statica)
  })
    .pipe($.size(opts.size))
    .pipe(dest(dirs.dest))
    .pipe(bs.stream({ match: '**/*.{json,text,webmanifest,xml}' }));
}
statica.displayName = 'statica';
statica.description = 'Copy statics files';
