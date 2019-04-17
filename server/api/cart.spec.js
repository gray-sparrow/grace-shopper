const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/cart', () => {

    it('GET /api/cart', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)

      expect(res.body).to.be.an('object')
    })
    it('PUT /api/cart', async () => {
      const res = await request(app)
        .put('/api/cart')
        .send({productId: 1, quantity: 2})
        .expect(202)
      expect(res.body).to.be.an('array')
    })
  })
})
