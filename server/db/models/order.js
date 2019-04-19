const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  sessionId: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
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
})

module.exports = Order
