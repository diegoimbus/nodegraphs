'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMunicipiosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('municipios', {
    idMunicipios: {
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
