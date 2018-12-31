const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getYear = require('../lib/get-year')
const getSprint = require('../lib/get-sprint')
const subSprints = require('../lib/sub-sprints')
const addSprints = require('../lib/add-sprints')
const createSprintFile = require('../lib/create-sprint-file')

function command (args, flags, context) {
  let date = new Date()
  let sprint = getSprint(args.sprint, date)

  if (flags.next) {
    sprint = addSprints(sprint, 1)
    date = sprint.start
  } else if (flags.previous) {
    sprint = subSprints(sprint, 1)
    date = sprint.start
  }

  let dateForYear = date
  if (sprint.number === 1) {
    dateForYear = sprint.end
  }

  const year = getYear(args.year, dateForYear)

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
    default: false,
    description: 'make a sprint file for the next sprint'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a sprint file for the previous sprint'
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
    },
    {
      cmd: 'daylog sprint --next',
      description: 'make a file for the next sprint'
    },
    {
      cmd: 'daylog sprint --previous',
      description: 'make a file for the previous sprint'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
