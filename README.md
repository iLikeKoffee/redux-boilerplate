React-redux boilerplate
=======================
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
![](https://img.shields.io/badge/version-0.1.0-green.svg)

Features
--------
* Webpack build with JSX syntax and ES2015
* React and Redux
* Redux router
* Redux dev tools and hot reload
* Tests with *Jest* and **React Test Utilities** (There is an [issue](https://github.com/facebook/react/issues/4972) with stateless components testing)
* **Standard.js** code styles checks
* Less preprocessor with autoprefixer
* Bootstrap
* Documentation from docstrings by [esdoc](https://esdoc.org/)

Commands
--------
* `npm start` - start webpack development server with hot reload and dev-tools
* `npm run build` - build for production
* `npm run lint` - check code style
* `npm run jest` - run tests
* `npm run test` - check code style and run tests
* `npm run clean` - remove build results
* `npm run package` - runs tests, builds project for production and creates tarball ready for deployment to webserver root
* `npm run docs` - generate documentation esdoc
**Note**
Wanna get rid of stupid npm messages
```
npm ERR! Darwin 15.2.0
npm ERR! argv "/usr/local/Cellar/node/5.3.0/bin/node" "/usr/local/bin/npm" "run-script" "lint"
npm ERR! node v5.3.0
npm ERR! npm  v3.3.12
npm ERR! code ELIFECYCLE
npm ERR! redux-boilerplate@0.1.0 lint: `standard`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the redux-boilerplate@0.1.0 lint script 'standard'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the redux-boilerplate package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     standard
npm ERR! You can get their info via:
npm ERR!     npm owner ls redux-boilerplate
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/alexeysidash/Dev/phones-app/npm-debug.log
```
like this?

run npm scripts with `--silent` flag


**Note**
Some commands will run on both unix and windows, but most work only Mac and Linux.

Gotchas
-------
* There is some magic done by **Jest** and **TestUtils**. jest.dontMock('path') does not work with es6 import. **USE require('path') in jest tests** while testing.
* Stateless(arrow) components cannot be tested with test utils(yet) cause of [this issue](https://github.com/facebook/react/issues/4972)

Links for further reading
-------------------------
* [redux](https://github.com/rackt/redux)
* [redux-style-guide](https://github.com/ghengeveld/react-redux-styleguide)
* [ducks proposal](https://github.com/erikras/ducks-modular-redux)
* [jest](https://facebook.github.io/jest/)
* [react-test-utils](https://facebook.github.io/jest/)
* [standard.js](http://standardjs.com/)
* [dumb and smart components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.p8p5yhc6u)
