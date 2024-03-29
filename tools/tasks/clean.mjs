/*!
 * Themy (v2.0.0): tools/tasks/clean.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { fancyLog, green, magenta, dirs, del } from '../utils/index.mjs';

export async function clean (done) {
  const folder = dirs.clean.length > 1 ? 'folders' : 'folder';

  if (dirs.clean.length > 0) {
    fancyLog(`${green('-> Clean all files')} in ${magenta(dirs.clean)} ${folder}`);
    await del(dirs.clean);
  } else {
    fancyLog(`${green('-> Nothing to clean!')}`);
  }

  done();
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
