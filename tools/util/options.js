/*!
 * Themy (v1.0.0): tools/util/options.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { paths } from './config';

export const opts = {
  // Options for Styles
  styles: {
    failAfterError: true,
    reportOutputDir: paths.logs.gulp,
    reporters: [
      { formatter: 'string', console: true, save: 'styles.txt' }
    ],
    syntax: 'scss'
  },
  sass: {
    outputStyle: 'expanded',
    precision: 6
  },
  autoprefixer: {
    // for browsers options see .browserslistrc
    cascade: false
  },
  csso: {
    comments: false
  },
  // Options for Scripts
  eslint: {
    // for more options see .eslintrc.js
  },
  babel: {
    // for more options see .babelrc.js
  },
  uglify: {
    compress: {
      evaluate: false
    },
    mangle: {
      keep_fnames: true
    }
  },
  // Options for Images
  images: {
    gif: { interlaced: true },
    jpeg: { progressive: true },
    png: { optimizationLevel: 4 },
    svg: { plugins: [{ removeViewBox: true }] },
    general: {
      verbose: false,
      silent: true
    },
    webp: { // https://github.com/imagemin/imagemin-webp#options
      preset: 'default',
      quality: 60
    }
  },
  // Options for Pages
  puglint: {
    // for more options see .pug-lintrc.js
  },
  pug: {
    doctype: 'html',
    pretty: true
  },
  prettier: {
    // for more options see .prettierrc.js
  },
  html: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  },
  // Others
  size: {
    gzip: true,
    showFiles: true
  },
  watch: {
    delay: 2000
  }
};
