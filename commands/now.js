import Daylog from '../index.js'
import createFile from '../lib/create-file.js'
import readConfig from '../lib/config/read.js'

function command (args, flags, context) {
  const { projectDirectory } = args

  let config
  try {
    config = readConfig(projectDirectory)
  } catch (e) {
    config = {
      dateFileTypes: {
        day: true,
        week: true,
        sprint: true,
        month: true,
        quarter: true,
        year: true
      }
    }
  }

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
      command: 'daylog now',
      description: 'create all current date files. uses `dateFileType` settings in .daylog/config.json to determine which file to create'
    }
  ]
}

export default {
  command,
  args,
  flags,
  options
}
