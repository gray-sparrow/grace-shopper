const router = require('express').Router()
const { Rice } = require('../db/models')

// Routes to api/allproducts

router.get('/', async (req, res, next) => {
  //Route for all products
    try {
      const rice = await Rice.findAll()
      res.json(rice)
    } catch(error) { next(error) }
})

router.get('/:riceId', async (req, res, next) => {
  //Route for single product
  try {
    const foundSingleRice = await Rice.findByPk(req.params.riceId)
    res.json(foundSingleRice)
  } catch(error) { next(error) }
})

module.exports = router
