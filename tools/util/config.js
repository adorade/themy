/*!
 * Themy (v1.0.2): tools/util/config.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { pkg, isTheme, destTarget, cleanDest } from './settings';

export const dirs = {
  root: './',
  src: 'src',
  dest: destTarget,
  clean: cleanDest,
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
    src: isTheme
      ? `${dirs.src}/images/sample/**/*.{gif,jpg,jpeg,png,svg}`
      : `${dirs.src}/images/prod/**/*.{gif,jpg,jpeg,png,svg}`,
    webp: isTheme
      ? `${dirs.src}/images/sample/**/*.{jpg,jpeg,png}`
      : `${dirs.src}/images/prod/**/*.{jpg,jpeg,png}`,
    dest: isTheme ? `${dirs.dest}/assets/images/sample/` : `${dirs.dest}/assets/images/`
  },
  statics: {
    src: {
      icons: `${dirs.src}/statics/**/*.{ico,png,svg}`,
      conf: `${dirs.src}/statics/**/*.{json,txt,webmanifest,xml}`
    },
    dest: `${dirs.dest}/statics/`,
    files: `${dirs.dest}/*.{json,txt,webmanifest,xml}`
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
