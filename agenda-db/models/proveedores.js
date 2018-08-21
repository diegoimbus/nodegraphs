'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProveedoresModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('proveedores', {
    idProveedores: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    skip: {
      type: Sequelize.INTEGER(11)
    },
    descripcion: {
      type: Sequelize.STRING(50)
    },
    img_banner: {
      type: Sequelize.STRING(200)
    },
    img_logo: {
      type: Sequelize.STRING(200)
    },
    web_site: {
      type: Sequelize.STRING(50)
    }
  })
}
