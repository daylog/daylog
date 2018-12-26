const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const subMonths = require('date-fns/sub_months')
const addMonths = require('date-fns/add_months')

const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createMonthFile = require('../lib/create-month-file')

function command (args, flags, context) {
  let date = new Date()

  if (flags.next) {
    date = addMonths(date, 1)
  } else if (flags.last) {
    date = subMonths(date, 1)
  }

  const month = getMonth(args.month, date)
  const year = getYear(args.string, date)

  const monthReadmeFile = createMonthFile({ month, year })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const monthReadmeFilepath = path.join(monthDirectoryPath, 'README.md')

  mkdirp.sync(monthDirectoryPath)

  try {
    fs.accessSync(monthReadmeFilepath)
  } catch (e) {
    fs.writeFileSync(monthReadmeFilepath, monthReadmeFile)
  }
}

const args = [
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
  description: 'create a new file for a month'
}

module.exports = {
  command,
  args,
  flags,
  options
}
