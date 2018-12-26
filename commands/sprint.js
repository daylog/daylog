const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const getSprint = require('../lib/get-sprint')
const subSprints = require('date-fns/sub_sprints')
const addSprints = require('date-fns/add_sprints')
const createSprintFile = require('../lib/create-sprint-file')

function command (args, flags, context) {
  let date = new Date()
  let sprint = getSprint(args.sprint, date)

  if (flags.next) {
    sprint = addSprints(sprint, 1)
    date = sprint.start
  } else if (flags.last) {
    sprint = subSprints(sprint, 1)
    date = sprint.start
  }

  const year = getYear(args.year, date)

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

const flags = [
  {
    name: 'next',
    alias: 'n',
    type: 'boolean',
    default: false
  },
  {
    name: 'last',
    alias: 'l',
    type: 'boolean',
    default: false
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
  flags,
  options
}