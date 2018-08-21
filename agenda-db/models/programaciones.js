'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProgramacionesModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('programaciones', {
    idProgramaciones: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fecha_inicial: {
      type: TIMESTAMP
    },
    fecha_final: {
      type: TIMESTAMP
    }
  })
}
