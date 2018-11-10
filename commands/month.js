const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createMonthFile = require('../lib/create-month-file')

function command (args, flags, context) {
  const date = new Date()
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

const options = {
  description: 'create a new file for a month'
}

module.exports = {
  command,
  args,
  options
}
