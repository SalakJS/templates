const app = require('..')
const request = require('supertest')

describe('Test {{name}}', () => {
  let callback
  beforeAll(async () => {
    callback = await app.callback()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('GET /', () => {
    it('should see title "Salak Application"', async () => {
      const res = await request(callback).get('/').expect(200)

      expect(res.text).toMatch('<title>Salak Application</title>')
      expect(res.text).toMatch('Hello, {{name}}')
    })
  })

  describe('GET /welcome', () => {
    it('should see title "Salak Application"', async () => {
      const res = await request(callback).get('/welcome').expect(200)

      expect(res.text).toMatch('<title>Salak Application</title>')
      expect(res.text).toMatch('Hello, {{name}}')
    })
  })

  describe('GET /api/user', () => {
    it('should get object which contain `name`', async () => {
      await request(callback).get('/api/user').expect(400)
      const res = await request(callback).get('/api/user?name=salak').expect(200)

      expect(res.body).toEqual({ app: '{{name}}', name: 'salak' })
    })
  })
})
