const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getDay = require('../lib/get-day')
const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createDayFile = require('../lib/create-day-file')

function command (args, flags, context) {
  const date = new Date()
  const day = getDay(args[0], date)
  const month = getMonth(args[1], date)
  const year = getYear(args[2], date)

  const dayFile = createDayFile({
    day,
    month,
    year
  })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const dayFilepath = path.join(monthDirectoryPath, day.filename)

  mkdirp.sync(monthDirectoryPath)

  try {
    fs.accessSync(dayFilepath);
  } catch (e) {
    fs.writeFileSync(dayFilepath, dayFile)
  }
}

const options = []

module.exports = {
  command,
  options
}
