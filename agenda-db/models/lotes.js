'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupLotesModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('lotes', {
    idLotes: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50)
    },
    fecha: {
      type: TIMESTAMP
    },
    numero_arboles: {
      type: Sequelize.INTEGER(11)
    },
    distancia_arboles: {
      type: Sequelize.INTEGER(11)
    },
    distancia_surco: {
      type: Sequelize.INTEGER(11)
    }
  })
}
