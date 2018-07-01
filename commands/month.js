const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createMonthFile = require('../lib/create-month-file')

function command (args, flags, context) {
  const date = new Date()
  const month = getMonth(args[0], date)
  const year = getYear(args[1], date)

  const monthReadmeFile = createMonthFile({
    month,
    year
  })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const monthReadmeFilepath = path.join(monthDirectoryPath, 'README.md')

  mkdirp.sync(monthDirectoryPath)

  try {
    fs.accessSync(monthReadmeFilepath);
  } catch (e) {
    fs.writeFileSync(monthReadmeFilepath, monthReadmeFile)
  }
}

const options = []

module.exports = {
  command,
  options
}
