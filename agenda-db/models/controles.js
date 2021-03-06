'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupControlesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('controles', {
    idControles: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    },
    descripcion: {
      type: Sequelize.STRING(50)
    },
    recomendaciones: {
      type: Sequelize.STRING(200)
    },
    motivacion: {
      type: Sequelize.STRING(200)
    },
    riesgos: {
      type: Sequelize.STRING(200)
    }
  })
}
