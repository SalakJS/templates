const { Controller } = require('salak')

class User extends Controller {
  async actionIndex () {
    return {
      app: '{{name}}',
      name: this.query.name
    }
  }
}

module.exports = User
