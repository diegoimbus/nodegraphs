'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupActividadesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('cat_actividades', {
    idActividades: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    descripcion: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    recomendaciones: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    motivacion: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    riesgos: {
      type: Sequelize.STRING(200),
      allowNull: true
    }
  })
}
