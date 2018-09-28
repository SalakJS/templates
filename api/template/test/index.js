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
    it('should get `name`', async () => {
      const res = await request(callback).get('/').expect(200)

      expect(res.body).toEqual({ name: '{{name}}' })
    })
  })
})
