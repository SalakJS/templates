const { Behavior } = require('salak')

class Welcome extends Behavior {
  actionIndex () {
    return {
      meta: {
        summary: 'Welcome',
        description: 'Index page.',
        tags: ['Page']
      }
    }
  }
}

module.exports = Welcome
