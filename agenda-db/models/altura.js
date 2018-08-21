'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAlturaModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('altura', {
    idAltura: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descripcion: {
      type: Sequelize.STRING(50)
    },
    altura: {
      type: Sequelize.STRING(50)
    },
    dias_diferencia: {
      type: Sequelize.STRING(50)
    }
  })
}
