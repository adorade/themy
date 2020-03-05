# Front-end Starter Kit with Gulp

[![GitHub package.json version](https://img.shields.io/github/package-json/v/adorade/themy.svg?label=&color=green&logo=github)](https://github.com/adorade/themy/blob/master/package.json)
[![license](https://img.shields.io/github/license/adorade/themy.svg?label=)](https://mit-license.org)

This project is an opinionated build automation for front-end web development based on [Node](https://nodejs.org/), [Gulp](http://gulpjs.com/), [Yarn](https://yarnpkg.com/), [Sass](http://sass-lang.com/), [Babel](https://babeljs.io/) and [Pug](https://pugjs.org/) for ThemeForest Projects.

## Features

- Pug compilation with [gulp-pug](https://www.npmjs.com/package/gulp-pug)
- Tidy Html files with [gulp-prettier](https://www.npmjs.com/package/gulp-prettier)
- Concatenate the Javascript files with [gulp-include](https://www.npmjs.com/package/gulp-include)
- Sass compilation with [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- ES6 transpilation with [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- Auto-refresh browser with [browser sync](https://www.npmjs.com/package/browser-sync)
- Minification ([Clean CSS](https://www.npmjs.com/package/gulp-clean-css) and [Uglify](https://www.npmjs.com/package/gulp-uglify))
- Autoprefix CSS with [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Better error messages in gulp with [Plumber](https://www.npmjs.com/package/gulp-plumber)
- Compress images with [Imagemin](https://www.npmjs.com/package/gulp-imagemin)
- Show compiled file size with [gulp-size](https://www.npmjs.com/package/gulp-size) in development mode
- Output project files in zip file for Themeforest production with [gulp-zip](https://www.npmjs.com/package/gulp-zip)

## How to use

1. Clone this repository

    ```bash
    git clone https://github.com/adorade/themy.git my-new-project
    ```

2. Update the files

    **_package.json_**

    ```json
    ...
    "name": "theme-name",
    "version": "1.0.0"
    ...
    ```

    **_gulpfile.js_**

    ```javascript
    ...
    // for themeforest theme
    const  isThemeforestTheme  =  false;
    // if production mode is active. -> false: developement mode
    const  isProduction  =  false;
    // if minified file included in production
    const  minifiedFileInclude  =  false;
    ...
    ```

3. Install the project dependencies

    ```bash
    cd my-new-project
    yarn install
    ```

4. Develop awesome things

    ```bash
    yarn start
    # or
    gulp
    ```
  
## License  
  
See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
