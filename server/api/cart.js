const router = require('express').Router()

//Router for api/cart
//Used for making back-end changes to req.session.cart

router.get('/', (req, res, next) => {
  res.json(req.session)
})

router.put('/', (req, res, next) => {
  //updates the cart with a req.body containing an individual product's ID and quantity
  console.log('here')
  req.session.cart.push(req.body)
  res.status(202).send(req.session.cart)
})

router.delete('/', (req, res, next) => {
  //deleting an item from cart should return the array without the filtered item
  req.session.cart.filter(item => { return item.productId !== req.body.productId })
  res.sendStatus(401)
})

module.exports = router
