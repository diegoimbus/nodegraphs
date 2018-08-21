'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupFloracionesModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('floraciones', {
    idFloraciones: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    tipo: {
      type: Sequelize.STRING(50)
    },
    fecha: {
      type: TIMESTAMP
    }
  })
}
