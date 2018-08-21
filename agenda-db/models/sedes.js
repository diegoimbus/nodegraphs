'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupSedesModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('sedes', {
    idSedes: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    },
    telefono_movil: {
      type: Sequelize.STRING(50)
    },
    telefono: {
      type: Sequelize.STRING(50)
    },
    direccion: {
      type: Sequelize.STRING(200)
    },
    hora_inicial: {
      type: TIMESTAMP
    },
    hora_final: {
      type: TIMESTAMP
    },
    lon: {
      type: Sequelize.STRING(100)
    },
    lat: {
      type: Sequelize.STRING(100)
    }
  })
}
