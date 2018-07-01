const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const createYearFile = require('../lib/create-year-file')

function command (args, flags, context) {
  const date = new Date()
  const year = getYear(args[0], date)

  const yearReadmeFile = createYearFile({ year })

  const yearDirectoryPath = path.join(process.cwd(), year.number)
  const yearReadmeFilepath = path.join(yearDirectoryPath, 'README.md')

  mkdirp.sync(yearDirectoryPath)

  try {
    fs.accessSync(yearReadmeFilepath);
  } catch (e) {
    fs.writeFileSync(yearReadmeFilepath, yearReadmeFile)
  }
}

const options = []

module.exports = {
  command,
  options
}
