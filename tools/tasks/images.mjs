/*!
 * Themy (v1.0.2): tools/tasks/images.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, paths, opts,
  fs, bs, del, size
} from '../utils/index.mjs';
// Load specific modules
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import webp from 'gulp-webp';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanImages (done) {
  if (fs.existsSync(paths.images.dest)) {
    fancyLog(`${green('-> Clean all images')} in ${magenta(paths.images.dest)} folder`);
    await del(paths.images.dest);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanImages.displayName = 'clean:images';
cleanImages.description = 'Clean up images folder';

export function imagine () {
  fancyLog(`${green('-> Optimizing images...')}`);
  return src(paths.images.src, {
    since: lastRun(imagine)
  })
    .pipe(imagemin([
      gifsicle(opts.images.gif),
      mozjpeg(opts.images.jpeg),
      optipng(opts.images.png),
      svgo(opts.images.svg)
    ], opts.images.general))
    .pipe(size(opts.size))
    .pipe(dest(paths.images.dest))
    .pipe(bs.stream({ match: '**/*.{gif,jpg,jpeg,png,svg}' }));
}
imagine.displayName = 'optimize:img';
imagine.description = 'Optimize images for production';

export function convert () {
  fancyLog(`${green('-> Generating .webp formats...')}`);
  return src(paths.images.webp, {
    since: lastRun(convert)
  })
    .pipe(webp(opts.images.webp))
    .pipe(size(opts.size))
    .pipe(dest(paths.images.dest))
    .pipe(bs.stream({ match: '**/*.{webp}' }));
}
convert.displayName = 'convert:img';
convert.description = 'Convert images format for browser';
