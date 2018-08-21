'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupActividadInsumoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('actividad_insumo', {
  })
}
