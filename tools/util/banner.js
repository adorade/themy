/*!
 * Themy (v1.0.2): tools/util/banner.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { pkg, time } from './settings';
const title = `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`;
const year = time.getFullYear();

export function banner () {
  let result = '';

  try {
    result = [
      '/*!',
      ` * ${title} (v${pkg.version}): <%= file.relative %>`,
      ` * ${pkg.description}`,
      ` * Copyright (c) ${year} ${pkg.author.name}`,
      ` * License under ${pkg.license}`,
      ' * ========================================================================== */',
      '' // new line
    ].join('\n');
  } catch (err) {
    console.error(err);
  }

  return result;
}
