const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const getSprint = require('../lib/get-sprint')
const createSprintFile = require('../lib/create-sprint-file')

function command (args, flags, context) {
  const date = new Date()
  const year = getYear(args.year, date)
  const sprint = getSprint(args.sprint, date)

  const sprintFile = createSprintFile({ sprint, year })

  const sprintDirectoryPath = path.join(process.cwd(), year.number, 'sprints')
  const sprintFilepath = path.join(sprintDirectoryPath, `${sprint.numberZeroFilled}.md`)

  mkdirp.sync(sprintDirectoryPath)

  try {
    fs.accessSync(sprintFilepath)
  } catch (e) {
    fs.writeFileSync(sprintFilepath, sprintFile)
  }
}

const args = [
  {
    name: 'sprint',
    type: 'integer'
  },
  {
    name: 'year',
    type: 'integer'
  }
]

const options = {
  description: 'create a new file for a two week sprint',
  examples: [
    {
      cmd: 'daylog sprint',
      description: 'make a file for the current sprint'
    },
    {
      cmd: 'daylog sprint 26',
      description: 'make a file for a specific sprint'
    }
  ]
}

module.exports = {
  command,
  args,
  options
}
