/*!
 * Themy (v1.0.2): tools/utils/banner.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { pkg, title, time } from './index.mjs';

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
