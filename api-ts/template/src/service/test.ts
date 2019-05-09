import { Service } from 'salak'

declare module 'salak' {
  interface IService {
    service (name: 'test'): Test
  }
}

class Test extends Service {
  getTestname (name: string): string {
    return name
  }
}

export default Test
