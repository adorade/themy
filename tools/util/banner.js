/*!
 * Themy (v1.0.0): tools/util/banner.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { pkg, year } from './settings';
const title = `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`;

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
