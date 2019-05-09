import app from '../app'
import * as request from 'supertest'

describe('Test {{name}}', () => {
  let callback: any
  beforeAll(async () => {
    callback = await app.callback()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('GET /', () => {
    it('/ should show json', async () => {
      const res = await request(callback).get('/').expect(200)

      expect(res.body).toEqual({
        name: '{{name}}'
      })
    })
  })
})
