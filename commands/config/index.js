const path = require('path')
const configExists = require('../../lib/config/exists')

function command (args, flags, context) {
  const { projectDirectory } = args
  context.help()

  if (configExists(projectDirectory)) {
    console.log('Configuration for this project is in', path.join(projectDirectory, '.daylog'))
    console.log('Templates can be edited in the directory', path.join(projectDirectory, '.daylog', 'templates'))
    console.log('Settings can be edited in the file', path.join(projectDirectory, '.daylog', 'config.json'))
  } else {
    console.log('Configuration for this project does not yet exist.')
    console.log('Create a config folder using `daylog config create`')
  }
}

const args = [
  {
    name: 'projectDirectory',
    type: 'string',
    default: process.cwd(),
    description: 'the directory that the .daylog directory will be created in'
  }
]

const flags = []

const options = {
  description: 'Get information about daylog configuration'
}

module.exports = {
  command,
  flags,
  args,
  options
}
