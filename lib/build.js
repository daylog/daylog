const assert = require('assert')
const mkdirp = require('mkdirp')
const pump = require('pump')
const reader = require('folder-reader')

const transformFiles = require('./transform-files')
const writeFiles = require('./write-files')

module.exports = function build (options, callback) {
  assert(options && typeof options === 'object', 'options object is required')
  const { format, output, notesDirectory } = options
  assert(output && typeof output === 'string', '--output directory path is required')

  mkdirp(output, (err) => {
    if (err) return callback(err)
    pump(reader(notesDirectory), transformFiles(), writeFiles({ format, output }), (err) => {
      if (err) callback(err)
    })
  })
}
