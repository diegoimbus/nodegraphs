'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupVariedadColorModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('variedad_color', {
  })
}
