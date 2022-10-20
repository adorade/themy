/*!
 * Themy (v1.0.2): tools/tasks/styles.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta,
  isProduction, isTheme, paths, opts, banner,
  fs, bs, del, header, rename, size /*, debug */
} from '../utils/index.mjs';
// Load specific modules
import gStylelint from 'gulp-stylelint';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const gSass = gulpSass(dartSass);
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanCss (done) {
  if (fs.existsSync(paths.styles.dest)) {
    fancyLog(`${green('-> Clean all styles')} in ${magenta(paths.styles.dest)} folder`);
    await del(paths.styles.dest);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanCss.displayName = 'clean:css';
cleanCss.description = 'Clean up styles folders';

export function lintScss () {
  fancyLog(`${green('-> Linting SCSS files...')}`);
  return src(paths.styles.src, {
    since: lastRun(lintScss)
  })
    .pipe(gStylelint(opts.styles));
}
lintScss.displayName = 'lint:scss';
lintScss.description = 'Lint SCSS files';

export function compile () {
  fancyLog(`${green('-> Compiling SCSS...')}`);
  return src(paths.styles.src, {
    since: lastRun(compile),
    sourcemaps: true
  })
    .pipe(gSass(opts.sass).on('error', gSass.logError))
    .pipe(autoprefixer(opts.autoprefixer))
    .pipe(header(banner()))
    .pipe(size(opts.size))
    .pipe(dest(paths.styles.dest, { sourcemaps: './' }))
    .pipe(bs.stream({ match: '**/*.css' }));
}
compile.displayName = 'compile:scss';
compile.description = 'Compile SCSS files';

export function minifyCss (done) {
  const condition = isProduction || isTheme;

  if (condition) {
    fancyLog(`${green('-> Minify CSS...')}`);
    return src(paths.styles.filter, {
      since: lastRun(minifyCss)
    })
      .pipe(csso(opts.csso))
      .pipe(rename({ suffix: '.min' }))
      .pipe(header(banner()))
      .pipe(size(opts.size))
      .pipe(dest(paths.styles.dest))
      .pipe(bs.stream({ match: '**/*.min.css' }));
  } else {
    fancyLog(`${green('-> No minify CSS...')}`);
  }

  done();
}
minifyCss.displayName = 'min:css';
minifyCss.description = 'Minify CSS files';
