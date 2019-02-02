const quarter = require('../lib/quarter')
const createFile = require('../lib/create-file')

function command (args, flags, context) {
  createFile(quarter({
    next: flags.next,
    previous: flags.previous,
    quarter: args.quarter,
    year: args.year
  }))
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
