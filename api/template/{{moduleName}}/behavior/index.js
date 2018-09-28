const { Behavior, Joi } = require('salak')

class Index extends Behavior {
  actionIndex () {
    return {
      meta: {
        summary: 'AppName',
        description: 'Get App name.',
        tags: ['Salak']
      },
      validate: {
        responses: {
          200: {
            body: {
              name: Joi.string().required().description('App name')
            }
          }
        }
      }
    }
  }
}

module.exports = Index
