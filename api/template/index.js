const Salak = require('salak')

const app = new Salak({
  baseDir: __dirname,
  opts: {
    root: '{{moduleName}}'
  }
})

module.exports = app
