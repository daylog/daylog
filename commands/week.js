const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const subWeeks = require('date-fns/sub_weeks')
const addWeeks = require('date-fns/add_weeks')

const getYear = require('../lib/get-year')
const getWeek = require('../lib/get-week')
const createWeekFile = require('../lib/create-week-file')

function command (args, flags, context) {
  let date = new Date()

  if (flags.next) {
    date = addWeeks(date, 1)
  } else if (flags.last) {
    date = subWeeks(date, 1)
  }

  const year = getYear(args.year, date)
  const week = getWeek(args.week, date)

  const weekFile = createWeekFile({ week, year })

  const weekDirectoryPath = path.join(process.cwd(), year.number, 'weeks')
  const weekFilepath = path.join(weekDirectoryPath, `${week.number}.md`)

  mkdirp.sync(weekDirectoryPath)

  try {
    fs.accessSync(weekFilepath)
  } catch (e) {
    fs.writeFileSync(weekFilepath, weekFile)
  }
}

const args = [
  {
    name: 'week',
    type: 'integer'
  },
  {
    name: 'year',
    type: 'integer'
  }
]

const flags = [
  {
    name: 'next',
    alias: 'n',
    type: 'boolean',
    default: false
  },
  {
    name: 'last',
    alias: 'l',
    type: 'boolean',
    default: false
  }
]

const options = {
  description: 'create a new file for a week of the year',
  examples: [
    {
      cmd: 'daylog week',
      description: 'make a file for the current week'
    },
    {
      cmd: 'daylog week 52',
      description: 'make a file for a specific week'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
