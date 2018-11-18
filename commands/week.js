const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const getWeek = require('../lib/get-week')
const createWeekFile = require('../lib/create-week-file')

function command (args, flags, context) {
  const date = new Date()
  const year = getYear(args.year, date)
  const week = getWeek(args.week, date)

  const weekFile = createWeekFile({ week, year })

  const weekDirectoryPath = path.join(process.cwd(), year.number, 'weeks')
  const weekFilepath = path.join(weekDirectoryPath, `${week.number}.md`)

  mkdirp.sync(weekDirectoryPath)

  try {
    fs.accessSync(weekFilepath)
  } catch (e) {
    fs.writeFileSync(weekFilepath, weekFile)
  }
}

const args = [
  {
    name: 'week',
    type: 'integer'
  },
  {
    name: 'year',
    type: 'integer'
  }
]

const options = {
  description: 'create a new file for a week of the year',
  examples: [
    {
      cmd: 'daylog week',
      description: 'make a file for the current week'
    },
    {
      cmd: 'daylog week 52',
      description: 'make a file for a specific week'
    }
  ]
}

module.exports = {
  command,
  args,
  options
}
