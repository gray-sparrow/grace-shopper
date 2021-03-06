/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Rice = db.model('rice')

describe('Rice routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/allproducts/', () => {
    const riceName = 'Jasmine Rice'

    beforeEach(() => {
      return Rice.create({
        name: 'Jasmine Rice',
        price: 2,
        origin: 'Hawaii',
        type: 'White Jasmine Rice',
        img: '/jasminerice.jpg',
        description: 'White jasmine rice is white, has a jasmine flower aroma and, when cooked, a slightly sticky texture. The aroma is caused by the evaporation of 2-Acetyl-1-pyrroline.'
      })
    })

    // Route for fetching all products
    it('GET /api/allproducts', async () => {
      const res = await request(app)
        .get('/api/allproducts')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(riceName)
    })
    it('GET /api/allproducts/:riceId', async () => {
      const res = await request(app)
        .get(`/api/allproducts/1`)
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(riceName)
    })
  })
})

