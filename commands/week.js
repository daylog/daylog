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
  } else if (flags.previous) {
    date = subWeeks(date, 1)
  }
  const week = getWeek(args.week, date)

  let dateForYear = date
  if (week.number === 1) {
    dateForYear = week.end
  }

  const year = getYear(args.year, dateForYear)

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
    default: false,
    description: 'make a week file for the next week'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a week file for the previous week'
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
    },
    {
      cmd: 'daylog week --next',
      description: 'make a file for the next week'
    },
    {
      cmd: 'daylog week --previous',
      description: 'make a file for the previous week'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
