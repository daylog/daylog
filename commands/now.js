const day = require('../lib/day')
const week = require('../lib/week')
const sprint = require('../lib/sprint')
const month = require('../lib/month')
const quarter = require('../lib/quarter')
const year = require('../lib/year')
const createFile = require('../lib/create-file')

function command (args, flags, context) {
  createFile(day({}))
  createFile(week({}))
  createFile(sprint({}))
  createFile(month({}))
  createFile(quarter({}))
  createFile(year({}))
}

const args = []

const flags = []

const options = {
  description: 'make a file if it doesn\'t exist for the current day, week, sprint, month, quarter, & year',
  examples: [
    {
      cmd: 'daylog now',
      description: 'create all current date files'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
