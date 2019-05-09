import { Controller } from 'salak'

class Index extends Controller {
  actionIndex () {
    const appName: string = this.service('test').getTestname('{{name}}')

    return {
      name: appName
    }
  }
}

export default Index
