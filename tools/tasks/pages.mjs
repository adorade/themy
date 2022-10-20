/*!
 * Themy (v1.0.2): tools/tasks/pages.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, isProduction, isTheme, paths, opts,
  bs, del, gulpif, prettier, size, sync /*, debug */
} from '../utils/index.mjs';
// Load specific modules
import pugLinter from 'gulp-pug-linter';
import pug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanPages (done) {
  const pageFiles = sync(paths.views.files);

  if (pageFiles.length > 0) {
    fancyLog(`${green('-> Clean pages')} ${magenta(pageFiles)} files`);
    await del(paths.views.files);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanPages.displayName = 'clean:pages';
cleanPages.description = 'Clean up html files';

export function lintPages () {
  fancyLog(`${green('-> Linting templates...')}`);
  return src(paths.views.all, {
    since: lastRun(lintPages)
  })
    .pipe(pugLinter())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pugLinter({ failAfterError: true }));
}
lintPages.displayName = 'lint:pages';
lintPages.description = 'Lint pug (views) files';

export function pagile () {
  fancyLog(`${green('-> Generating Pages via Pug...')}`);

  // Options for pug
  const dates = {
    data: {
      isProduction: isProduction,
      isTheme: isTheme
    }
  };
  const pugOpts = Object.assign({}, opts.pug, dates);

  return src(paths.views.src)
    .pipe(pug(pugOpts))
    // .pipe(cached('pug_compile'))
    .pipe(gulpif(!isProduction,
      prettier( /* see .prettierrc.js for options */ )
    ))
    .pipe(size(opts.size))
    .pipe(dest(paths.views.dest))
    .pipe(bs.stream({ match: '**/*.html' }));
}
pagile.displayName = 'gen:pages';
pagile.description = 'Generate Pages via Pug';

export function pagify (done) {
  if (isProduction) {
    fancyLog(`${green('-> Minify HTML...')}`);
    return src(paths.views.files, {
      // since: lastRun(pagify)
    })
      .pipe(htmlmin(opts.html))
      // .pipe(cached('html_min'))
      .pipe(size(opts.size))
      .pipe(dest(paths.views.dest))
      .pipe(bs.stream({ match: '**/*.html' }));
  } else {
    fancyLog(`${green('-> No minify HTML...')}`);
  }

  done();
}
pagify.displayName = 'html:min';
pagify.description = 'Minify HTML files';
