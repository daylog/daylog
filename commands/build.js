const assert = require('assert')
const mkdirp = require('mkdirp')
const pump = require('pump')
const reader = require('folder-reader')

const transformFiles = require('../lib/transform-files')
const writeFiles = require('../lib/write-files')

function command (args, flags, context) {
  const { notesDirectory } = args
  const { format, output } = flags

  assert(output && typeof output === 'string', '--output directory path is required')

  mkdirp(output, (err) => {
    if (err) return console.error(err)
    pump(reader(notesDirectory), transformFiles(), writeFiles({ format, output }), (err) => {
      if (err) console.error(err)
    })
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
