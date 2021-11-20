import sprint from '../lib/sprint.js'
import createFile from '../lib/create-file.js'

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
      command: 'daylog sprint',
      description: 'make a file for the current sprint'
    },
    {
      command: 'daylog sprint 26',
      description: 'make a file for a specific sprint'
    },
    {
      command: 'daylog sprint --next',
      description: 'make a file for the next sprint'
    },
    {
      command: 'daylog sprint --previous',
      description: 'make a file for the previous sprint'
    }
  ]
}

export default {
  command,
  args,
  flags,
  options
}
