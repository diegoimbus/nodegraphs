'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupCaficultoresModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('caficultores', {
    idCaficultores: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    celular: {
      type: Sequelize.INTEGER(11)
    },
    id_cafetero: {
      type: Sequelize.STRING(100)
    },
    cedula_cafetera: {
      type: Sequelize.STRING(100)
    },
    genero: {
      type: Sequelize.STRING(45)
    },
    fecha_nacimiento: {
      type: TIMESTAMP
    },
    imagen: {
      type: Sequelize.STRING(200)
    },
    gremio: {
      type: Sequelize.STRING(200)
    }
  })
}
