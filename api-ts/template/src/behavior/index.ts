import { Behavior, Joi, BehaviorObject } from 'salak'

declare module 'salak' {
  interface Behavior {
    behavior (name: 'index'): Index
  }
}

class Index extends Behavior {
  actionIndex (): BehaviorObject {
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

export default Index
