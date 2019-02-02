const year = require('../lib/year')
const createFile = require('../lib/create-file')

function command (args, flags, context) {
  createFile(year({
    next: flags.next,
    previous: flags.previous,
    year: args.year
  }))
}

const args = [
  {
    name: 'year',
    type: 'integer'
  }
]

const flags = []

const options = {
  description: 'create a new file for a year'
}

module.exports = {
  command,
  args,
  flags,
  options
}
