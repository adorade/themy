/*!
 * Themy (v2.0.0): tools/tasks/statics.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, dirs, paths, opts,
  fs, bs, del, size, sync /*, debug */
} from '../utils/index.mjs';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanStatics (done) {
  const configFiles = sync(paths.statics.files);

  if (fs.existsSync(paths.statics.dest) || configFiles.length > 0) {
    fancyLog(`${green('-> Clean config')} ${magenta(configFiles)} files`);
    fancyLog(`${green('-> Clean up')} ${magenta(paths.statics.dest)} folder`);
    await del([paths.statics.dest, paths.statics.files]);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanStatics.displayName = 'clean:statics';
cleanStatics.description = 'Clean up statics folders';

export function favicons () {
  fancyLog(`${green('-> Copying favicons files...')}`);
  return src(paths.statics.src.icons, {
    since: lastRun(favicons)
  })
    .pipe(size(opts.size))
    .pipe(dest(paths.statics.dest))
    .pipe(bs.stream({ match: '**/*.{ico,png,svg}' }));
}
favicons.displayName = 'favicons';
favicons.description = 'Copy favicons files';

export function statica () {
  fancyLog(`${green('-> Copying statics files...')}`);
  return src(paths.statics.src.conf, {
    since: lastRun(statica)
  })
    .pipe(size(opts.size))
    .pipe(dest(dirs.dest))
    .pipe(bs.stream({ match: '**/*.{json,text,webmanifest,xml}' }));
}
statica.displayName = 'statica';
statica.description = 'Copy statics files';
