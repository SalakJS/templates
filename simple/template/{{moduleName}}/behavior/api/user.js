const { Behavior, Joi } = require('salak')

class User extends Behavior {
  actionIndex () {
    return {
      meta: {
        summary: 'UserLogin',
        description: 'User Login.',
        tags: ['API']
      },
      validate: {
        query: {
          name: Joi.string().required().description('username')
        },
        responses: {
          200: {
            body: {
              app: Joi.string().required().description('app name'),
              name: Joi.string().required().description('username')
            }
          }
        }
      }
    }
  }
}

module.exports = User
