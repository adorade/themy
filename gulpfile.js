/*!
 * Themy (v1.0.0): gulpfile.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

/**
 * Load gulp v4 plugins
 * ========================================================================== */
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');

// Colors for fancy log
// const { red } = require('ansi-colors');

// Plugins load
const $ = gulpLoadPlugins();

// Auto reload the browser
const reloadStream = browserSync.reload;
const reload = done => {
  browserSync.reload();
  done();
};

/*
 * Override gulp.src() for nicer error handling.
 * ========================================================================== */
const gulpSrc = gulp.src;
gulp.src = function (...args) {
  return gulpSrc.apply(gulp, args)
    // Catch errors
    .pipe(
      $.plumber(function (error) {
        // Output an error message
        // $.fancyLog(
        //   red(`Error (${error.plugin}): ${error.message}`)
        // );
        console.log(error);
        // emit the end event, to properly end the task
        this.emit('end');
      })
    );
};

// Package data
const pkg = require('./package.json');

// For Themeforest theme
const isTheme = true;

// if production mode is active. -> false: developement mode
const isProduction = false;

// if minified file included in production
const minifiedFileInclude = true;

// Project Path
const srcRoot = 'src';
const src = {
  styles: `${srcRoot}/scss`,
  stylesColors: `${srcRoot}/scss/themes`,
  stylesVendors: `${srcRoot}/scss/vendors`,
  scripts: `${srcRoot}/js`,
  scriptsVendors: `${srcRoot}/js/vendors`,
  images: `${srcRoot}/img`,
  views: `${srcRoot}/pug`
};

// Distribution Path
const tmpRoot = 'tmp';
const distRoot = isTheme ? `${pkg.name}-v${pkg.version}` : 'dist';
const dist = {
  styles: isProduction ? `${distRoot}/assets/css` : `${tmpRoot}/assets/css`,
  stylesColors: isProduction
    ? `${distRoot}/assets/css/colors`
    : `${tmpRoot}/assets/css/colors`,
  stylesVendors: isProduction
    ? `${distRoot}/assets/css/vendors`
    : `${tmpRoot}/assets/css/vendors`,
  scripts: isProduction ? `${distRoot}/assets/js` : `${tmpRoot}/assets/js`,
  scriptsVendors: isProduction
    ? `${distRoot}/assets/js/vendors`
    : `${tmpRoot}/assets/js/vendors`,
  images: isProduction ? `${distRoot}/assets/img` : `${tmpRoot}/assets/img`,
  views: isProduction ? `${distRoot}` : `${tmpRoot}`
};

/**
 * Clean
 * ========================================================================== */
gulp.task('clean', () =>
  del(`${distRoot}`, {
    force: true
  })
);

/**
 * Builds
 * ========================================================================== */
// Styles
// ----------------------------
gulp.task('style', () => {
  let stream = gulp
    .src(`${src.styles}/*.scss`)
    .pipe($.sass())
    .pipe(
      $.sass
        .sync({
          outputStyle: 'expanded',
          precision: 6,
          includePaths: ['.']
        })
        .on('error', $.sass.logError)
    )
    .pipe($.autoprefixer());

  if (isProduction) {
    if (minifiedFileInclude) {
      stream = stream
        .pipe(gulp.dest(dist.styles))
        .pipe($.cleanCss())
        .pipe($.rename({ suffix: '.min' }));
    }
  } else {
    stream = stream
      .pipe($.cleanCss())
      .pipe($.rename({ suffix: '.min' }))
      .pipe(
        $.size({
          showFiles: true
        })
      );
  }
  stream = stream
    .pipe(gulp.dest(dist.styles))
    .pipe(reloadStream({ stream: true }));
  return stream;
});

gulp.task('style:theme', () => {
  let stream = gulp
    .src(`${src.stylesColors}/*.scss`)
    .pipe($.sass())
    .pipe(
      $.sass
        .sync({
          outputStyle: 'expanded',
          precision: 6,
          includePaths: ['.']
        })
        .on('error', $.sass.logError)
    )
    .pipe($.autoprefixer());

  if (isProduction) {
    if (minifiedFileInclude) {
      stream = stream
        .pipe(gulp.dest(dist.stylesColors))
        .pipe($.cleanCss())
        .pipe($.rename({ suffix: '.min' }));
    }
  } else {
    stream = stream
      .pipe($.cleanCss())
      .pipe($.rename({ suffix: '.min' }))
      .pipe(
        $.size({
          showFiles: true
        })
      );
  }
  stream = stream
    .pipe(gulp.dest(dist.stylesColors))
    .pipe(reloadStream({ stream: true }));
  return stream;
});

gulp.task('style:vendors', () => {
  let stream = gulp
    .src(`${src.stylesVendors}/*.scss`)
    .pipe($.sass())
    .pipe(
      $.sass
        .sync({
          outputStyle: 'expanded',
          precision: 6,
          includePaths: ['.']
        })
        .on('error', $.sass.logError)
    )
    .pipe($.autoprefixer());

  if (isProduction) {
    if (minifiedFileInclude) {
      stream = stream
        .pipe(gulp.dest(dist.stylesVendors))
        .pipe($.cleanCss())
        .pipe($.rename({ suffix: '.min' }));
    }
  } else {
    stream = stream
      .pipe($.cleanCss())
      .pipe($.rename({ suffix: '.min' }))
      .pipe(
        $.size({
          showFiles: true
        })
      );
  }
  stream = stream
    .pipe(gulp.dest(dist.stylesVendors))
    .pipe(reloadStream({ stream: true }));
  return stream;
});

gulp.task('styles', gulp.series('style', 'style:theme', 'style:vendors'));

// Scripts
// ----------------------------
gulp.task('script', () => {
  let stream = gulp
    .src(`${src.scripts}/*.js`)
    .pipe($.include())
    .pipe(
      $.babel( /* see babelrc.js for options */ )
    );

  if (isProduction) {
    if (minifiedFileInclude) {
      stream = stream
        .pipe(gulp.dest(dist.scripts))
        .pipe($.uglify())
        .pipe($.rename({ suffix: '.min' }));
    }
  } else {
    stream = stream
      .pipe($.uglify())
      .pipe($.rename({ suffix: '.min' }))
      .pipe(
        $.size({
          showFiles: true
        })
      );
  }
  stream = stream
    .pipe(gulp.dest(dist.scripts))
    .pipe(reloadStream({ stream: true }));
  return stream;
});

gulp.task('script:vendors', () => {
  let stream = gulp
    .src(`${src.scriptsVendors}/*.js`)
    .pipe($.include())
    .pipe(
      $.babel( /* see babelrc.js for options */ )
    );

  if (isProduction) {
    if (minifiedFileInclude) {
      stream = stream
        .pipe(gulp.dest(dist.scriptsVendors))
        .pipe($.uglify())
        .pipe($.rename({ suffix: '.min' }));
    }
  } else {
    stream = stream
      .pipe($.uglify())
      .pipe($.rename({ suffix: '.min' }))
      .pipe(
        $.size({
          showFiles: true
        })
      );
  }
  stream = stream
    .pipe(gulp.dest(dist.scriptsVendors))
    .pipe(reloadStream({ stream: true }));
  return stream;
});

gulp.task('scripts', gulp.series('script', 'script:vendors'));

// Images
// ----------------------------
gulp.task('images', () => {
  let stream;
  if (isTheme) {
    stream = gulp
      .src(
        !isProduction ? `${src.images}/sample/**/*` : `${src.images}/prod/**/*`
      )
      .pipe($.newer(!isProduction ? `${dist.images}/sample` : `${dist.images}`))
      .pipe(
        $.imagemin([
          $.imagemin.gifsicle({
            interlaced: true
          }),
          $.imagemin.mozjpeg({
            progressive: true
          }),
          $.imagemin.optipng({
            optimizationLevel: 5
          }),
          $.imagemin.svgo({
            plugins: [
              {
                removeViewBox: false
              },
              {
                cleanupIDs: false
              }
            ]
          })
        ])
      )
      .pipe(
        gulp.dest(!isProduction ? `${dist.images}/sample` : `${dist.images}`)
      );
  } else {
    stream = gulp
      .src(`${src.images}/**/*`)
      .pipe($.newer(`${dist.images}`))
      .pipe(
        $.imagemin([
          $.imagemin.gifsicle({
            interlaced: true
          }),
          $.imagemin.jpegtran({
            progressive: true
          }),
          $.imagemin.optipng({
            optimizationLevel: 5
          }),
          $.imagemin.svgo({
            plugins: [
              {
                removeViewBox: false
              },
              {
                cleanupIDs: false
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest(`${dist.images}`));
  }
  stream = stream.pipe(reloadStream({ stream: true }));
  return stream;
});

// Pages
// ----------------------------
gulp.task('views', () =>
  gulp
    .src(`${src.views}/*.pug`)
    .pipe(
      $.pug({
        pretty:
					((isTheme && isProduction) || !isTheme) ? true : false,
        data: {
          isProduction: isProduction,
          isTheme: isTheme
        }
      })
    )
    .pipe(
      $.if(
        (isTheme && isProduction) || !isTheme,
        $.prettier({
          printWidth: 300,
          tabWidth: 4,
          useTabs: true
        })
      )
    )
    .pipe(gulp.dest(`${dist.views}`))
    .pipe(reloadStream({ stream: true }))
);

/**
 * Build Theme
 * ========================================================================== */
gulp.task('zip', () =>
  gulp
    .src(`${distRoot}/*`)
    .pipe($.zip(`${distRoot}.zip`))
    .pipe(gulp.dest('./'))
);

if (isTheme && isProduction) {
  gulp.task(
    'build',
    gulp.series('clean', 'views', 'styles', 'scripts', 'images', 'zip')
  );
} else {
  gulp.task(
    'build',
    gulp.series('clean', 'views', 'styles', 'scripts', 'images')
  );
}

/**
 * Serve - open up theme in your browser and watch for changes
 * ========================================================================== */
gulp.task('serve', done => {
  browserSync.init({
    notify: false,
    ui: false,
    port: 3000,
    server: dist.views
  });

  done();

  gulp.watch(`${src.views}/**/*.pug`, gulp.series('views', reload));
  gulp.watch(
    [`${src.styles}/**/*.scss`, `!${src.stylesColors}/**/*.scss`, `!${src.stylesVendors}/**/*.scss`],
    gulp.series('style', reload)
  );
  gulp.watch(`${src.stylesColors}/**/*.scss`, gulp.series('style:theme', reload));
  gulp.watch(`${src.stylesVendors}/**/*.scss`, gulp.series('style:vendors', reload));
  gulp.watch([`${src.scripts}/**/*.js`, `!${src.scriptsVendors}/**/*.js`], gulp.series('script', reload));
  gulp.watch(`${src.scriptsVendors}/**/*.js`, gulp.series('script:vendors', reload));
  gulp.watch(`${src.images}/**/*`, gulp.series('images', reload));
});

/**
 * Default task - build and serves the theme
 * ========================================================================== */
gulp.task('default', gulp.series('build', 'serve'));
