'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTipoInsumoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('tipo_insumo', {
    idTipoInsumo: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    }
  })
}
