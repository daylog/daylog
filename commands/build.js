const fs = require('fs')
const path = require('path')
const assert = require('assert')
const mkdirp = require('mkdirp')
const pump = require('pump')

const readFiles = require('../lib/read-files')
const writeFiles = require('../lib/write-files')

function command (args, flags, context) {
  const { format, output } = flags
  assert(output && typeof output === 'string', '--output directory path is required')
  const notesDirectory = args[0] || process.cwd()
  mkdirp(output, (err) => {
    if (err) return console.error(err)
    pump(readFiles(notesDirectory), writeFiles({ format, output }), (err) => {
      if (err) console.error(err)
    })
  })
}

const options = [
  {
    name: 'format',
    boolean: false,
    default: 'html',
    abbr: 'f',
    help: 'format for output'
  },
  {
    name: 'output',
    boolean: false,
    default: null,
    abbr: 'o',
    help: 'output directory for files (required)'
  }
]

module.exports = {
  command,
  options
}
