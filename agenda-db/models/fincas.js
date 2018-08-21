'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupFincasModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('fincas', {
    idFincas: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    },
    imagen: {
      type: Sequelize.STRING(200)
    },
    lat: {
      type: Sequelize.STRING(100)
    },
    lon: {
      type: Sequelize.STRING(100)
    },
    hectares_totales: {
      type: Sequelize.INTEGER(11)
    },
    hectares_cafe: {
      type: Sequelize.STRING(50)
    },
    vereda: {
      type: Sequelize.STRING(50)
    }
  })
}
