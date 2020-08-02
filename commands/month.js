const month = require('../lib/month')
const createFile = require('../lib/create-file')

function command (args, flags, context) {
  createFile(month({
    next: flags.next,
    previous: flags.previous,
    month: args.month,
    year: args.year
  }))
}

const args = [
  {
    name: 'month'
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
    description: 'make a month file for the next month'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a month file for the previous month'
  }
]

const options = {
  description: 'create a new file for a month',
  examples: [
    {
      cmd: 'daylog month',
      description: 'make a file for the current month'
    },
    {
      cmd: 'daylog month --next',
      description: 'make a file for the next month'
    },
    {
      cmd: 'daylog month --previous',
      description: 'make a file for the previous month'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
