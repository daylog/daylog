const Daylog = require('../index')
const createFile = require('../lib/create-file')
const readConfig = require('../lib/config/read')

function command (args, flags, context) {
  const { projectDirectory } = args
  const config = readConfig(projectDirectory)
  const daylog = new Daylog()

  Object.keys(config.dateFileTypes).forEach((fileType) => {
    const included = config.dateFileTypes[fileType]

    if (included) {
      createFile(daylog[fileType]())
    }
  })
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
  description: 'make a file if it doesn\'t exist for the current day, week, sprint, month, quarter, & year',
  examples: [
    {
      cmd: 'daylog now',
      description: 'create all current date files. uses `dateFileType` settings in .daylog/config.json to determine which file to create'
    }
  ]
}

module.exports = {
  command,
  args,
  flags,
  options
}
