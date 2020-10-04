/*!
 * Themy (v1.0.2): tools/index.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export {
  checks, help,                                   // Checks
  clean,                                          // Clean
  cleanCss, lintScss, compile, minifyCss,         // Styles
  cleanJs, lintJs, transpile, minifyJs,           // Scripts
  cleanVendor, vendorCss, vendorJs,               // Vendors
  cleanImages, imagine, convert,                  // Images
  cleanStatics, favicons, statica,                // Statics
  cleanPages, lintPages, pagile, pagify,          // Pages
  cleanZip, archive,                              // Release Theme
  serve                                           // Serve and Watch
} from './tasks';
