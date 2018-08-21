'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupColoresModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('colores', {
    idColores: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  })
}
