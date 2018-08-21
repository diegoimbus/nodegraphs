'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupFincaCaficultorModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('finca_caficultor', {
  })
}
