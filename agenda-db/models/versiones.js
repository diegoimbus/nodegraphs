'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupVersionesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('versiones', {
    idVersiones: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    version: {
      type: Sequelize.INTEGER(11)
    }
  })
}
