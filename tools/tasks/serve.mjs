/*!
 * Themy (v1.0.2): tools/tasks/serve.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  series, watch, fancyLog, bgBlue, bgRed, green, magenta, red, isProduction, paths, opts, dirs, bs
} from '../utils/index.mjs';
import {
  lintScss, compile, minifyCss,
  lintJs, transpile, minifyJs,
  vendorCss, vendorJs,
  imagine, convert, favicons, statica,
  lintPages, pagile, pagify
} from './index.mjs';

export function serve () {
  // NOTE: port and prefix for theme
  bs.init({
    ui: false,
    port: isProduction ? 1234 : 9876,
    logPrefix: isProduction ? 'Themy Prod' : 'Themy Dev',
    server: dirs.dest
    // server: {
    //   baseDir: dirs.dest
    // }
  });

  function watchEvent (path, event, task) {
    fancyLog(
      `File ${magenta(path)} was ${green(event)} running ${red(task)}`
    );
  }

  const watchers = [
    {
      name: 'Styles',
      paths: paths.styles.src,
      tasks: [lintScss, compile, minifyCss]
    },
    {
      name: 'Scripts',
      paths: paths.scripts.src,
      tasks: [lintJs, transpile, minifyJs]
    },
    {
      name: 'Vendor CSS',
      paths: paths.vendors.src.css,
      tasks: [vendorCss]
    },
    {
      name: 'Vendor JS',
      paths: paths.vendors.src.js,
      tasks: [vendorJs]
    },
    {
      name: 'Images',
      paths: paths.images.src,
      tasks: [imagine, convert]
    },
    {
      name: 'Favicons',
      paths: paths.statics.src.icons,
      tasks: [favicons]
    },
    {
      name: 'Statics',
      paths: paths.statics.src.conf,
      tasks: [statica]
    },
    {
      name: 'Pages',
      paths: [
        paths.views.all,
        paths.views.data
      ],
      tasks: [lintPages, pagile, pagify]
    }
  ];

  for (let watcher of watchers) {
    fancyLog(bgRed(`Watching ${watcher.name}`));

    for (let p of [watcher.paths]) {
      fancyLog(bgBlue('Source: '), magenta(p));
    }

    let taskNames = [];

    for (let value of Object.values(watcher.tasks)) {
      let taskName = value.displayName;
      taskNames.push(taskName);
    }

    watch(
      watcher.paths, opts.watch, series(watcher.tasks)
    )
      .on('all', (event, path) => {
        watchEvent(path, event, taskNames);
      });
  }
}
serve.displayName = 'serve:watch';
serve.description = 'Serve and Watch';
