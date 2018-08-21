'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupDepartamentosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('departamentos', {
    idDepartamentos: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    }
  })
}
