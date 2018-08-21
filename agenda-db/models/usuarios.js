'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUsuariosModel (config) {
  const sequelize = setupDatabase(config)
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)

  return sequelize.define('usuarios', {
    idUsuarios: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    correo: {
      type: Sequelize.STRING(100),
      isEmail: true,
      unique: true
    },
    nombre: {
      type: Sequelize.STRING(100)
    },
    password: {
      type: Sequelize.STRING(100)
    },
    fecha_registro: {
      type: TIMESTAMP
    },
    tipo: {
      type: Sequelize.STRING(50)
    },
    toke_facebook: {
      type: Sequelize.STRING(100)
    },
    token_google_plus: {
      type: Sequelize.STRING(100)
    }
  })
}
