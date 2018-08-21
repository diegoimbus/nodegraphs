'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModulosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('modulos', {
    idModulo: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    },
    tabla: {
      type: Sequelize.STRING(50)
    },
    primary_id: {
      type: Sequelize.STRING(50)
    }
  })
}
