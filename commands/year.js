import year from '../lib/year.js'
import createFile from '../lib/create-file.js'

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

export default {
  command,
  args,
  flags,
  options
}
