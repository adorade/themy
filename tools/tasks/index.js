/*!
 * Themy (v1.0.0): tools/tasks/index.js
 * Copyright (c) 2020 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export { checks } from './checks';                                              // Checks
export { clean } from './clean';                                                // Clean
export { cleanCss, lintScss, compile, minify } from './styles';                 // Styles
export { cleanJs, lintJs, transpile, uglify } from './scripts';                 // Scripts
export { cleanVendor, vendorCss, vendorJs } from './vendors';                   // Vendors
export { cleanImages, imagine, convert } from './images';                       // Images
export { cleanStatics, favicons, statica } from './statics';                    // Statics
export { cleanPages, lintPages, pagile, pagify } from './pages';                // Pages
export { cleanZip, archive } from './release';                                  // Release Theme
export { serve } from './serve';                                                // Serve and Watch
