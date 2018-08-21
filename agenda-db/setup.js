'use strict'

const debug = require('debug')('bd_cofi:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database. Are you sure?'
    }
  ])

  if (!answer.setup) {
    return console.log('process annulated')
  }

  const config = {
    database: process.env.DB_NAME || 'bd_cofi',
    username: process.env.DB_USER || 'agenda',
    password: process.env.DB_PASS || 'agenda',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),
    setup: true,
    operatorsAliases: false,
    insecureAuth: true
  }

  await db(config).catch(handleFatalError)

  console.log(`${chalk.green('[Success!]')}`)
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
