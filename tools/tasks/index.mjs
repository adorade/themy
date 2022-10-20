/*!
 * Themy (v2.0.0): tools/tasks/index.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export { checks, help } from './checks.mjs';                                    // Checks
export { clean } from './clean.mjs';                                            // Clean
export { cleanCss, lintScss, compile, minifyCss } from './styles.mjs';          // Styles
export { cleanJs, lintJs, transpile, minifyJs } from './scripts.mjs';           // Scripts
export { cleanVendor, vendorCss, vendorJs } from './vendors.mjs';               // Vendors
export { cleanImages, imagine, convert } from './images.mjs';                   // Images
export { cleanStatics, favicons, statica } from './statics.mjs';                // Statics
export { cleanPages, lintPages, pagile, pagify } from './pages.mjs';            // Pages
export { cleanZip, archive } from './release.mjs';                              // Release Theme
export { serve } from './serve.mjs';                                            // Serve and Watch
