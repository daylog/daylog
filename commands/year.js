const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const createYearFile = require('../lib/create-year-file')

function command (args, flags, context) {
  const date = new Date()
  const year = getYear(args.year, date)

  const yearReadmeFile = createYearFile({ year })

  const yearDirectoryPath = path.join(process.cwd(), year.number)
  const yearReadmeFilepath = path.join(yearDirectoryPath, 'README.md')

  mkdirp.sync(yearDirectoryPath)

  try {
    fs.accessSync(yearReadmeFilepath)
  } catch (e) {
    fs.writeFileSync(yearReadmeFilepath, yearReadmeFile)
  }
}

const args = [
  {
    name: 'year',
    type: 'integer'
  }
]

const flags = []

const options = {
  description: 'create a new file for a year'
}

module.exports = {
  command,
  args,
  flags,
  options
}
