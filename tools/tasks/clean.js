/*!
 * Themy (v1.0.0): tools/tasks/clean.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { $, green, magenta, isClean, dirs } from '../util';

export function clean () {
  const folder = isClean ? 'folders' : 'folder';

  $.fancyLog(`${green('-> Clean all files')} in ${magenta(dirs.clean)} ${folder}`);
  return $.del(dirs.clean);
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
