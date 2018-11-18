const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const getQuarter = require('../lib/get-quarter')
const createQuarterFile = require('../lib/create-quarter-file')

function command (args, flags, context) {
  const date = new Date()
  const year = getYear(args.year, date)
  const quarter = getQuarter(args.quarter, date)

  const quarterFile = createQuarterFile({ quarter, year })

  const quarterDirectoryPath = path.join(process.cwd(), year.number, 'quarters')
  const quarterFilepath = path.join(quarterDirectoryPath, `${quarter.name.toLowerCase()}.md`)

  mkdirp.sync(quarterDirectoryPath)

  try {
    fs.accessSync(quarterFilepath)
  } catch (e) {
    fs.writeFileSync(quarterFilepath, quarterFile)
  }
}

const args = [
  {
    name: 'quarter'
  },
  {
    name: 'year',
    type: 'integer'
  }
]

const options = {
  description: 'create a new file for a quarter',
  examples: [
    {
      cmd: 'daylog quarter',
      description: 'make a file for the current quarter'
    },
    {
      cmd: 'daylog quarter spring',
      description: 'make a file for a specific quarter'
    }
  ]
}

module.exports = {
  command,
  args,
  options
}
