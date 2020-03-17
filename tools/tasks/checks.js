/*!
 * Themy (v1.0.2): tools/tasks/checks.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  tree, $, green, magenta, isTheme, isProduction, dirs, paths, opts, banner
} from '../util';

export function checks (done) {
  const gulpTree = tree();

  // Print process.argv
  $.fancyLog(`${magenta('-> Process argument values:\n')}`, process.argv.slice(2));
  // process.argv.forEach((val, index) => {
  //   $.fancyLog(`${index}: ${val}`);
  // });

  $.fancyLog(`${magenta('-> Gulp Tasks:')}`, gulpTree.nodes);
  $.fancyLog(`${magenta('-> Settings:')}`,
    `${green('Is theme:')} ${isTheme},`,
    `${green('Is production:')} ${isProduction}`
  );
  $.fancyLog(`${magenta('-> Base dir:')} ${green(dirs.dest)}`);
  $.fancyLog(`${magenta('-> Directories configuration:\n')}`, dirs);
  $.fancyLog(`${magenta('-> Paths configuration:\n')}`, paths);
  $.fancyLog(`${magenta('-> Options configuration:\n')}`, opts);
  $.fancyLog(`${magenta('-> Banner:\n')}`, banner());

  done();
}
checks.displayName = 'check:settings';
checks.description = 'Check for settings';
