const router = require('express').Router()
const {Order} = require('../db/models')

//Route for new Orders

router.get('/', async (req, res, next) => {
  try {
    let orders = await Order.findAll({
      where: {
        userId: req.session.passport.user,
        status: 'paid'
      }
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    let order = await Order.findByPk(id)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    //create a newOrder object to hold my info
    let newOrderInfo
    const price = req.body.price
    if (!req.session.cart.length) {
      res.sendStatus(422)
    } else {
      //if this person does not have a passport, he/she is not a user
      //HARD-CODED DATA WILL UPDATE LATER
      if (!req.session.passport) {
        newOrderInfo = {
          cart: req.session.cart,
          status: 'unpaid',
          price,
          sessionId: req.sessionID
        }
      } else {
        newOrderInfo = {
          cart: req.session.cart,
          status: 'unpaid',
          price,
          userId: req.session.passport.user
        }
      }
      //create a new instance of Order within my DB with status completed
      const newOrder = await Order.create(newOrderInfo)
      req.session.cart = []
      res.send(newOrder)
    }
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    let toBeUpdated = await Order.findByPk(id)
    let updated = await toBeUpdated.update({
      status: 'paid',
      where: {
        status: 'unpaid'
      }
    })
    res.json(updated)
  } catch (error) {
    next(error)
  }
})

module.exports = router
