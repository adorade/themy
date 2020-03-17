/*!
 * Themy (v1.0.2): tools/tasks/clean.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { $, green, magenta, dirs } from '../util';

export function clean (done) {
  const folder = dirs.clean.length > 1 ? 'folders' : 'folder';

  if (dirs.clean.length > 0) {
    $.fancyLog(`${green('-> Clean all files')} in ${magenta(dirs.clean)} ${folder}`);
    return $.del(dirs.clean);
  } else {
    $.fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
