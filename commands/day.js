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
  } else if (flags.last) {
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
  description: 'create a new file for a day'
}

module.exports = {
  command,
  args,
  flags,
  options
}
