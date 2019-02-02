const build = require('../lib/build')

function command (args, flags, context) {
  const { notesDirectory } = args
  const { format, output } = flags

  build({ notesDirectory, format, output }, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

const args = [
  {
    name: 'notesDirectory',
    type: 'string',
    default: process.cwd()
  }
]

const flags = [
  {
    name: 'format',
    alias: 'f',
    type: 'string',
    default: 'html',
    description: 'format for output'
  },
  {
    name: 'output',
    alias: 'o',
    description: 'output directory for files (required)'
  }
]

const options = {
  description: 'create an html or json build of a daylog project'
}

module.exports = {
  command,
  flags,
  args,
  options
}
