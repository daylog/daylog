const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getDay = require('../lib/get-day')
const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createDayFile = require('../lib/create-day-file')

function command (args, flags, context) {
  const date = new Date()
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

const options = {
  description: 'create a new file for a day'
}

module.exports = {
  command,
  args,
  options
}
