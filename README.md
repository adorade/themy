# Front-end Starter Kit with Gulp

[![GitHub package.json version](https://img.shields.io/github/package-json/v/adorade/themy.svg?label=&color=green&logo=github)](https://github.com/adorade/themy/blob/master/package.json)
[![license](https://img.shields.io/github/license/adorade/themy.svg?label=)](https://mit-license.org)

This project is an opinionated build automation for front-end web development based on [Node](https://nodejs.org/), [Gulp](http://gulpjs.com/), [Yarn](https://yarnpkg.com/), [Sass](http://sass-lang.com/), [Babel](https://babeljs.io/) and [Pug](https://pugjs.org/) for ThemeForest Projects.

## Features

- Sass compilation with [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- Code linting with [stylelint](https://github.com/olegskl/gulp-stylelint), [eslint](https://github.com/adametry/gulp-eslint) and [pug-lint](https://github.com/ilyakam/gulp-pug-linter)
- Concatenate the Javascript files with [gulp-include](https://www.npmjs.com/package/gulp-include)
- ES6 transpilation with [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- Minification with [csso](https://github.com/ben-eb/gulp-csso), [uglify](https://www.npmjs.com/package/gulp-uglify) and [htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)
- Autoprefix CSS with [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Compress images with [imagemin](https://www.npmjs.com/package/gulp-imagemin)
- Pug compilation with [gulp-pug](https://www.npmjs.com/package/gulp-pug)
- Tidy Html files with [gulp-prettier](https://www.npmjs.com/package/gulp-prettier)
- Auto-refresh browser with [browser sync](https://www.npmjs.com/package/browser-sync)
- Show compiled file size with [gulp-size](https://www.npmjs.com/package/gulp-size)
- Output project files in zip file for ThemeForest production with [gulp-zip](https://www.npmjs.com/package/gulp-zip)

## Requirements

Before you continue, ensure you have meet the following requirements installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/)
- [Gulp](http://gulpjs.com/)

## How to use

1. Clone this repository

    ```bash
    git clone https://github.com/adorade/themy.git my-new-project
    ```

2. Open **_package.json_**, then edit it with your settings

    ```json
    ...
    "name": "theme-name",
    "version": "1.0.0",
    "author": {
        "name": "Your Name",
        "email": "your@email.com",
        "url": "https://yoursite.com"
    },
    ...
    ```

3. Install the project dependencies

    ```bash
    cd my-new-project
    yarn install
    ```

4. Develop awesome things

    ```bash
    # development mode
    yarn start
    # or
    gulp

    # build theme, use `--theme` flag
    yarn start --theme
    # or
    gulp --theme

    # production mode, use `--production`
    # or `--prod` flag
    yarn start --production
    # or
    gulp --production
    ```
  
## License  
  
See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
