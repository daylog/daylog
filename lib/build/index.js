const assert = require('assert')
const mkdirp = require('mkdirp')
const pump = require('pump')
const reader = require('folder-reader')

const transformFiles = require('../transform-files')
const writeFiles = require('../write-files')

// TODO: refactor to use separate approaches for html & json
// TODO: html will rewrite to use /{name}/index.html paths
// TODO: json will be compiled into one big file
module.exports = function build (options, callback) {
  assert(options && typeof options === 'object', 'options object is required')
  const { format, output, notesDirectory } = options
  assert(output && typeof output === 'string', '--output directory path is required')

  mkdirp(output, (err) => {
    if (err) return callback(err)
    // TODO: exlude build directory from reader
    // TODO: exclude any files/directories that start with a period or underscore
    pump(reader(notesDirectory), transformFiles(), writeFiles({ format, output }), (err) => {
      if (err) callback(err)
    })
  })
}
