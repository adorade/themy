/*!
 * Themy (v2.0.0): tools/tasks/scripts.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, isProduction, isTheme, paths, opts, banner,
  fs, bs, del, header, rename, size /*, debug */
} from '../utils/index.mjs';
// Load specific modules
import babel from 'gulp-babel';
import include from 'gulp-include';
import gEslint from 'gulp-eslint';
import gTerser from 'gulp-terser-js';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanJs (done) {
  if (fs.existsSync(paths.scripts.dest)) {
    fancyLog(`${green('-> Clean all scripts')} in ${magenta(paths.scripts.dest)} folder`);
    await del(paths.scripts.dest);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
cleanJs.displayName = 'clean:js';
cleanJs.description = 'Clean up scripts folders';

export function lintJs () {
  fancyLog(`${green('-> Linting JS files...')}`);

  const outputDir = paths.logs.gulp;
  fs.mkdirSync(`${outputDir}`, { recursive: true });
  const output = fs.createWriteStream( `${outputDir}/scripts.txt` );

  return src(paths.scripts.src, {
    since: lastRun(lintJs)
  })
    .pipe(gEslint())
    .pipe(gEslint.format())
    .pipe(gEslint.format('stylish', output))
    .pipe(gEslint.failAfterError());
}
lintJs.displayName = 'lint:js';
lintJs.description = 'Lint JS files';

export function transpile () {
  fancyLog(`${green('-> Transpiling JS via Babel...')}`);
  return src(paths.scripts.src, {
    sourcemaps: true
  })
    .pipe(include())
    .pipe(babel( /* see babelrc.js for options */ ))
    .pipe(header(banner()))
    .pipe(size(opts.size))
    .pipe(dest(paths.scripts.dest, { sourcemaps: './' }))
    .pipe(bs.stream({ match: '**/*.js' }));
}
transpile.displayName = 'transpile:js';
transpile.description = 'Transpile JS via Babel';

export function minifyJs (done) {
  const condition = isProduction || isTheme;

  if (condition) {
    fancyLog(`${green('-> Minify JS...')}`);
    return src(paths.scripts.filter, {
      // since: lastRun(minifyJs)
    })
      .pipe(gTerser(opts.terser)
        .on('error', () => {
          this.emit('end');
        })
      )
      .pipe(rename({ suffix: '.min' }))
      .pipe(header(banner()))
      .pipe(size(opts.size))
      .pipe(dest(paths.scripts.dest))
      .pipe(bs.stream({ match: '**/*.min.js' }));
  } else {
    fancyLog(`${green('-> No minify JS...')}`);
  }

  done();
}
minifyJs.displayName = 'min:js';
minifyJs.description = 'Minify JS files';
