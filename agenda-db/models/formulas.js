'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupFormulasModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('formulas', {
    idFormulas: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    dias_base: {
      type: Sequelize.INTEGER(11)
    },
    dias_duracion: {
      type: Sequelize.INTEGER(11)
    },
    nota: {
      type: Sequelize.STRING(100)
    }
  })
}
