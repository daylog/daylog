import { join } from 'path'
import configExists from '../../lib/config/exists.js'

function command (args, flags, context) {
  const { projectDirectory } = args
  context.help()

  if (configExists(projectDirectory)) {
    console.log('Configuration for this project is in', join(projectDirectory, '.daylog'))
    console.log('Templates can be edited in the directory', join(projectDirectory, '.daylog', 'templates'))
    console.log('Settings can be edited in the file', join(projectDirectory, '.daylog', 'config.json'))
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

export default {
  command,
  flags,
  args,
  options
}
