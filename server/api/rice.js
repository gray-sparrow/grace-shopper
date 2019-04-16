const router = require('express').Router()
const { Rice } = require('../db/models')

// Routes to api/allproducts

router.get('/', async (req, res, next) => {
    try {
      const rice = await Rice.findAll()
      res.json(rice)
    } catch(error) { next(error) }
})

module.exports = router
