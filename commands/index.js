const pkg = require('../package.json')

function command (args, flags, context) {
  if (flags.version) {
    console.log(`${pkg.version}`)
    return process.exit()
  }

  context.help()
}

const flags = [
  {
    name: 'version',
    alias: 'v',
    type: 'boolean',
    description: 'show version of the cli'
  }
]

module.exports = {
  command,
  flags
}
