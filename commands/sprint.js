const sprint = require('../lib/sprint')
const createFile = require('../lib/create-file')

function command (args, flags, context) {
  createFile(sprint({
    next: flags.next,
    previous: flags.previous,
    sprint: args.sprint,
    year: args.year
  }))
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
