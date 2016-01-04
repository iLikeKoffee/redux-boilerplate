React-redux boilerplate
=======================
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Features
========
* Webpack build with JSX syntax and ES2015
* React and Redux
* Redux router
* Redux dev tools and hot reload
* Tests with *Jest* and **React Test Utilities** (There is an [issue](https://github.com/facebook/react/issues/4972) with stateless components testing)
* Standard.js code quality checks
* Less preprocessor

Gotchas
=======
* There is some magic done by **Jest** and **TestUtils**. jest.dontMock('path') does not work with es6 import sometimes. **USE require('path') in jest tests** while testing components.
* Stateless(arrow) components cannot be tested with test utils(yet) cause of [this issue](https://github.com/facebook/react/issues/4972)
