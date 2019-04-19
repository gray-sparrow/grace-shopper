const router = require('express').Router()
const {Order} = require('../db/models')

// Creates the order when cart is bought
router.post('/createOrder', async (req, res, next) => {
  try {
    const orderToMake = await Order.create({
      sessionId: req.sessionID,
      status: 'unpaid',
      cart: req.session.cart
    })
    req.session.cart = []
    res.json(orderToMake)
  } catch (error) {
    next(error)
  }
})

// Changes order status from unpaid to paid after checkout has been achieved
router.put('/orderCheckout', async (req, res, next) => {
  try {
    const id = req.sessionID
    const toBeUpdated = await Order.findByPk(id)
    const updated = await toBeUpdated.update({
      status: 'paid'
    })
    res.json(updated)
  } catch (error) {
    next(error)
  }
})
// For order look up using session Id (order confirmation # essentially) both user and guest will
// use this
router.get('/guestOrder', async (req, res, next) => {
  try {
    const guestNum = req.body.orderNum
    const order = Order.findAll({
      where: {
        sessionId: guestNum
      }
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// Fetch single order by orderNum
router.get('/guestOrder/:orderNum', async (req, res, next) => {
  try {
    const guestNum = req.params.orderNum
    const order = Order.findByPk({
      where: {
        sessionId: guestNum
      }
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

module.exports = router
