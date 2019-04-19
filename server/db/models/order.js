const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('orders', {
  cart: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['shipped', 'paid', 'completed', 'unpaid']]
    }
  },
  price: {
    type: Sequelize.INTEGER
  }
  //SESSIONID IMPLEMENTATION NEEDED
})

module.exports = Order
