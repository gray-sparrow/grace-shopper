const Sequelize = require('sequelize')
const db = require('../db')

const Origin = db.define('origin', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Origin