/*!
 * Themy (v1.0.2): tools/tasks/release.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, fancyLog, green, magenta, isArchive, paths, opts,
  fs, del, size, gulpif, hash, zip /*, debug */
} from '../utils/index.mjs';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanZip (done) {
  if (fs.existsSync(paths.release.dest)) {
    fancyLog(`${green('-> Clean up')} ${magenta(`${paths.release.dest}${paths.release.file}`)} file`);
    await del(paths.release.del);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanZip.displayName = 'clean:js';
cleanZip.description = 'Clean up zip files';

export function archive () {
  fancyLog(`${green('-> Building theme')} ${magenta(paths.release.file)} file`);
  return src(paths.release.src)
    .pipe(zip(paths.release.file, opts.zip))
    .pipe(gulpif(!isArchive,
      hash(opts.hash)
    ))
    .pipe(size(opts.size))
    .pipe(dest(paths.release.dest));
}
archive.displayName = 'zip:theme';
archive.description = 'Archive theme files';
