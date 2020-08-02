const prompts = require('prompts')

const createConfig = require('../../lib/config/create')

async function command (args, flags, context) {
  const { projectDirectory } = args

  const config = {
    dateFileTypes: {
      day: true,
      week: true,
      sprint: true,
      month: true,
      quarter: true,
      year: true
    }
  }

  const response = await prompts([{
    type: 'multiselect',
    name: 'dateFileTypes',
    message: 'Pick the types of date files you wish to use.\nAll file types are selected by default. Press space to exclude specific file types',
    choices: [
      { title: 'Day', value: 'day', selected: true },
      { title: 'Week', value: 'week', selected: true },
      { title: 'Sprint', value: 'sprint', selected: true },
      { title: 'Month', value: 'month', selected: true },
      { title: 'Quarter', value: 'quarter', selected: true },
      { title: 'Year', value: 'year', selected: true }
    ]
  }])

  Object.keys(config.dateFileTypes).forEach((fileType) => {
    if (!response.dateFileTypes.includes(fileType)) {
      config.dateFileTypes[fileType] = false
    }
  })

  createConfig(projectDirectory, config)
}

const args = [
  {
    name: 'projectDirectory',
    type: 'string',
    default: process.cwd(),
    description: 'The directory that the .daylog directory will be created in'
  }
]

const options = {
  description: 'Create a .daylog config directory'
}

module.exports = {
  command,
  flags: [],
  args,
  options
}
