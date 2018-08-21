'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupSensoresClimaModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('sensores_clima', {
    idSensoresClima: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nivel_luz: {
      type: Sequelize.INTEGER(11)
    },
    presion_atmosferica: {
      type: Sequelize.DECIMAL(10, 2)
    },
    temperatura: {
      type: Sequelize.DECIMAL(10, 2)
    },
    humedad: {
      type: Sequelize.DECIMAL(10, 2)
    },
    precipitaciones: {
      type: Sequelize.INTEGER(11)
    },
    fecha_medicion: {
      type: TIMESTAMP
    }
  })
}
