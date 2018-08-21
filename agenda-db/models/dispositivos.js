'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupDispositivosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('dispositivos', {
    idDispostivos: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    tipo: {
      type: Sequelize.INTEGER(11)
    },
    token: {
      type: Sequelize.STRING(50)
    },
    status: {
      type: Sequelize.INTEGER(11)
    },
    os: {
      type: Sequelize.INTEGER(11)
    }
  })
}
