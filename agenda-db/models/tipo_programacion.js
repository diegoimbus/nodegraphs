'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTipoProgramacionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('tipo_programacion', {
    idTipoProgramacion: {
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
    }
  })
}
