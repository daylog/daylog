const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const subQuarters = require('date-fns/sub_quarters')
const addQuarters = require('date-fns/add_quarters')

const getYear = require('../lib/get-year')
const getQuarter = require('../lib/get-quarter')
const createQuarterFile = require('../lib/create-quarter-file')

function command (args, flags, context) {
  let date = new Date()

  if (flags.next) {
    date = addQuarters(date, 1)
  } else if (flags.previous) {
    date = subQuarters(date, 1)
  }

  const quarter = getQuarter(args.quarter, date)

  let dateForYear = date
  if (quarter.number === 1) {
    dateForYear = quarter.end
  }

  const year = getYear(args.year, date)

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

const flags = [
  {
    name: 'next',
    alias: 'n',
    type: 'boolean',
    default: false,
    description: 'make a quarter file for the next quarter'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a quarter file for the previous quarter'
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
    },
    {
      cmd: 'daylog quarter --next',
      description: 'make a file for the next quarter'
    },
    {
      cmd: 'daylog quarter --previous',
      description: 'make a file for the previous quarter'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
