const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const subDays = require('date-fns/sub_days')
const addDays = require('date-fns/add_days')

const getDay = require('../lib/get-day')
const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createDayFile = require('../lib/create-day-file')

function command (args, flags, context) {
  let date = new Date()

  if (flags.next) {
    date = addDays(date, 1)
  } else if (flags.previous) {
    date = subDays(date, 1)
  }

  const day = getDay(args.day, date)
  const month = getMonth(args.month, date)
  const year = getYear(args.year, date)

  const dayFile = createDayFile({
    day,
    month,
    year
  })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const dayFilepath = path.join(monthDirectoryPath, day.filename)

  mkdirp.sync(monthDirectoryPath)

  try {
    fs.accessSync(dayFilepath)
  } catch (e) {
    fs.writeFileSync(dayFilepath, dayFile)
  }
}

const args = [
  {
    name: 'day',
    type: 'integer'
  },
  {
    name: 'month'
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
    description: 'make a day file for the next day'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a day file for the previous day'
  }
]

const options = {
  description: 'create a new file for a day',
  examples: [
    {
      cmd: 'daylog day',
      description: 'make a file for the current day'
    },
    {
      cmd: 'daylog day --next',
      description: 'make a file for the next day'
    },
    {
      cmd: 'daylog day --previous',
      description: 'make a file for the previous day'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
