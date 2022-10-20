/*!
 * Themy (v1.0.2): tools/tasks/checks.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  tree, fancyLog, cyan, green, magenta, isTheme, isProduction, dirs, paths, opts, banner
} from '../utils/index.mjs';

export function checks (done) {
  const gulpTasks = tree().nodes;

  // Print process.argv
  fancyLog(`${magenta('-> Process argument values:\n')}`, process.argv.slice(2));
  // process.argv.forEach((val, index) => {
  //   fancyLog(`${index}: ${val}`);
  // });

  fancyLog(`${magenta('-> Gulp Tasks:')}`, gulpTasks);
  fancyLog(`${magenta('-> Settings:')}`,
    `${green('Is theme:')} ${isTheme},`,
    `${green('Is production:')} ${isProduction}`
  );
  fancyLog(`${magenta('-> Base dir:')} ${green(dirs.dest)}`);
  fancyLog(`${magenta('-> Directories configuration:\n')}`, dirs);
  fancyLog(`${magenta('-> Paths configuration:\n')}`, paths);
  fancyLog(`${magenta('-> Options configuration:\n')}`, opts);
  fancyLog(`${magenta('-> Banner:\n')}`, banner());

  done();
}
checks.displayName = 'check:settings';
checks.description = 'Check for settings';

export function help (done) {
  fancyLog('');
  fancyLog(green('========================== Help for Themy =========================='));
  fancyLog('');
  fancyLog(green('  Usage: gulp [command][flag]'));
  fancyLog('');
  fancyLog(`  The gulp ${cyan('[command]')}s are the following:`);
  fancyLog('--------------------------------------------------------------------');
  fancyLog(`${cyan('  check:settings')}  Check gulp configuration`);
  fancyLog(`${cyan('  help          ')}  Print help message`);
  fancyLog(`${cyan('  clean:all     ')}  Clean up dist folders`);
  fancyLog(`${cyan('  build:styles  ')}  Build only styles files`);
  fancyLog(`${cyan('  build:scripts ')}  Build only scripts files`);
  fancyLog(`${cyan('  build:vendors ')}  Build only vendors files`);
  fancyLog(`${cyan('  build:images  ')}  Build only images files`);
  fancyLog(`${cyan('  build:statics ')}  Build statics files`);
  fancyLog(`${cyan('  build:pages   ')}  Build only html files`);
  fancyLog(`${cyan('  build:release ')}  Build only release files`);
  fancyLog(`${cyan('  serve:watch   ')}  Start the server and watch for any changes`);
  fancyLog(`${cyan('  build         ')}  Build the project`);
  fancyLog(`${cyan('  default       ')}  Default gulp task`);
  fancyLog('--------------------------------------------------------------------');
  fancyLog(`  Run ${cyan('`gulp --tasks`')} to see all available gulp tasks.`);
  fancyLog('');
  fancyLog(`  The ${magenta('[flag]')}s for build task are the following:`);
  fancyLog('--------------------------------------------------------------------');
  fancyLog(`${magenta('  `--clean`     ')}  Clean up all generated files`);
  fancyLog(`${magenta('  `--production`')}  Build in production mode, for demo`);
  fancyLog(`${magenta('  `--theme`     ')}  Build your theme`);
  fancyLog(`${magenta('  `--archive`   ')}  Archive your release`);
  fancyLog('');
  fancyLog(green('===================================================================='));
  fancyLog('');

  done();
}
help.displayName = 'help';
help.description = 'Print help message';
