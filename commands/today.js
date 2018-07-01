const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const openInEditor = require('open-in-editor')

const getDay = require('../lib/get-day')
const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createDayFile = require('../lib/create-day-file')
const config = require('../lib/config')

function command (args, flags, context) {
  const date = new Date()
  const day = getDay(args[0], date)
  const month = getMonth(args[1], date)
  const year = getYear(args[2], date)

  const dayFile = createDayFile({
    day,
    month,
    year
  })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const dayFilepath = path.join(monthDirectoryPath, day.filename)

  mkdirp.sync(monthDirectoryPath)

  try {
    fs.accessSync(dayFilepath);
  } catch (e) {
    fs.writeFileSync(dayFilepath, dayFile)
  }

  const editorName = flags.editor ? flags.editor : config.get('editor')

  if (!editorName) {
    throw new Error('--editor flag is required. possible values: sublime, atom, code, webstorm, phpstorm, idea14ce, vim, emacs, visualstudio')
  }

  const editor = openInEditor.configure({
    editor: editorName
  })

  editor.open(dayFilepath).then(function() {
    config.set('editor', editorName)
  }, function(err) {
    console.error(`Error opening editor ${editorName}:`, err);
  })
}

const options = [
  {
    name: 'editor',
    boolean: false,
    default: '',
    abbr: 'e',
    help: 'editor to open the file in'
  }
]

module.exports = {
  command,
  options
}
