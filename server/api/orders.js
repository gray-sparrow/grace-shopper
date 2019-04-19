const router = require('express').Router();
const {Order} = require('../db/models')

//Route for Orders

router.post('/', async (req, res, next) => {
  try {
    let newOrderInfo;
    console.log(req.session.cart)
    if (!req.session.passport) {
      newOrderInfo = {
        cart: req.session.cart,
        status: 'completed',
        price: 10,
        userId: null
      }
    } else
{    newOrderInfo = {
      cart: req.session.cart,
      status: 'completed',
      price: 10,
      userId: req.session.passport.user
    }}
    await Order.create(newOrderInfo)
    res.session.cart = [];
    res.send(res.session.cart);
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
