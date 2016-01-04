var traceur = require('traceur')
var babel = require('babel-core')

module.exports = {
  process: function (src, path) {
    if (path.indexOf('node_modules') === -1) {
      src = babel.transform(src, {
        filename: path,
        retainLines: true
      }).code
      src = traceur.compile(src)
    }
    return src
  }
}
