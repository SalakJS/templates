const { Controller } = require('salak')

class Index extends Controller {
  async actionIndex () {
    return {
      name: '{{name}}'
    }
  }
}

module.exports = Index
