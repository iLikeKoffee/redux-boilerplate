var traceur = require('traceur')
module.exports = {
  process: function (src, path) {
    if (path.indexOf('node_modules') === -1) {
      src = traceur.compile(src)
    }
    return src
  }
}
