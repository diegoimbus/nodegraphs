'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupCambiosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('cambios', {
    idCambios: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    item_id: {
      type: Sequelize.INTEGER(11)
    },
    cam_skip: {
      type: Sequelize.INTEGER(11)
    }
  })
}
