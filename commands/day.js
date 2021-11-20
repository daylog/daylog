import day from '../lib/day.js'
import createFile from '../lib/create-file.js'

function command (args, flags, context) {
  createFile(day({
    next: flags.next,
    previous: flags.previous,
    day: args.day,
    month: args.month,
    year: args.year
  }))
}

const args = [
  {
    name: 'day',
    type: 'integer'
  },
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
    description: 'make a day file for the next day'
  },
  {
    name: 'previous',
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'make a day file for the previous day'
  }
]

const options = {
  description: 'create a new file for a day',
  examples: [
    {
      command: 'daylog day',
      description: 'make a file for the current day'
    },
    {
      command: 'daylog day --next',
      description: 'make a file for the next day'
    },
    {
      command: 'daylog day --previous',
      description: 'make a file for the previous day'
    }
  ]
}

export default {
  command,
  args,
  flags,
  options
}
