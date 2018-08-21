'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupRecordatoriosModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('recordatorios', {
    idRecordatorios: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    hora: {
      type: Sequelize.STRING(50)
    },
    estado_recordatorio: {
      type: Sequelize.INTEGER(11)
    }
  })
}
