const assert = require('assert')
const app = require('..')
const request = require('supertest')

describe('Test {{name}}', () => {
  describe('GET /', () => {
    it('should see title "Salak Application"', (done) => {
      request(app.callback())
        .get('/')
        .expect(200, (err, res) => {
          if (err) {
            done(err)
            return
          }
          assert(res.text.includes('<title>Salak Application</title>'))
          assert(res.text.includes('Hello, {{name}}'))
          done()
        })
    })
  })

  describe('GET /welcome', () => {
    it('should see title "Salak Application"', (done) => {
      request(app.callback())
        .get('/welcome')
        .expect(200, (err, res) => {
          if (err) {
            done(err)
            return
          }
          assert(res.text.includes('<title>Salak Application</title>'))
          assert(res.text.includes('Hello, {{name}}'))
          done()
        })
    })
  })
})
