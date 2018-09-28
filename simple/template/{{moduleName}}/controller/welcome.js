const { Controller } = require('salak')

class Welcome extends Controller {
  static behaviors () {
    return {
      rules: {
        index: {
          meta: {
            summary: 'Welcome',
            description: 'This is the index page.'
          }
        }
      }
    }
  }

  async actionIndex () {
    await this.view('home', {
      title: 'Salak Application',
      content: 'Hello, {{name}}'
    })
  }
}

module.exports = Welcome
