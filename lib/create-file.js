const fs = require('fs')
const mkdirp = require('mkdirp')
const assert = require('assert-argument')

module.exports = function createFile (options) {
  assert.isObject(options)

  const { filepath, content, directoryPath } = options

  assert.isString(filepath)
  assert.isString(directoryPath)
  assert.isString(content)

  mkdirp.sync(directoryPath)

  try {
    fs.accessSync(filepath)
  } catch (e) {
    fs.writeFileSync(filepath, content)
  }
}
