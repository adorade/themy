/*!
 * Themy (v1.0.0): tools/util/config.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { pkg, isProduction, destTarget } from './settings';

export const dirs = {
  root: './',
  src: 'src',
  dest: destTarget,
  arch: 'archive',
  logs: 'logs'
};

export const paths = {
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dest: `${dirs.dest}/assets/css/`,
    filter: [ `${dirs.dest}/assets/css/**/*.css`, '!**/*.min.css' ]
  },
  scripts: {
    src: [ `${dirs.src}/js/**/*.js`, '!**/_*.js'],
    dest: `${dirs.dest}/assets/js/`,
    filter: [ `${dirs.dest}/assets/js/**/*.js`, '!**/*.min.js' ]
  },
  vendors: {
    src: {
      css: `${dirs.src}/vendors/css/**/*.{css,map}`,
      js: `${dirs.src}/vendors/js/**/*.{js,map}`
    },
    dest: {
      css: `${dirs.dest}/vendors/css/`,
      js: `${dirs.dest}/vendors/js/`
    },
    del: `${dirs.dest}/vendors/`
  },
  images: {
    src: !isProduction
      ? `${dirs.src}/images/sample/**/*.{gif,jpg,jpeg,png,svg}`
      : `${dirs.src}/images/prod/**/*.{gif,jpg,jpeg,png,svg}`,
    webp: !isProduction
      ? `${dirs.src}/images/sample/**/*.{jpg,jpeg,png}`
      : `${dirs.src}/images/prod/**/*.{jpg,jpeg,png}`,
    dest: !isProduction ? `${dirs.dest}/images/sample/` : `${dirs.dest}/images/`
  },
  statics: {
    src: {
      icons: `${dirs.src}/statics/**/*.{ico,png,svg}`,
      conf: `${dirs.src}/statics/**/*.{json,txt,webmanifest,xml}`
    },
    dest: `${dirs.dest}/statics/`,
    ext: '**/*.{json,txt,webmanifest,xml}'
  },
  views: {
    src: [ `${dirs.src}/views/**/*.pug`, '!**/_*.pug' ],
    all: `${dirs.src}/views/**/*.pug`,
    data: `${dirs.src}/views/data/**/*.json`,
    datas: `${dirs.src}/views/data/`,
    dest: `${dirs.dest}/`,
    files: `${dirs.dest}/**/*.html`
  },
  release: {
    src: `${dirs.dest}/**`,
    dest: `${dirs.arch}/${pkg.name}_${pkg.version}.zip`
  },
  logs: {
    gulp: `${dirs.logs}/gulp/`
  }
};
