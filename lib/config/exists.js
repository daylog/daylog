const fs = require('fs')
const path = require('path')
const assert = require('assert-argument')

module.exports = function configExists (directoryPath) {
  assert.isString(directoryPath)

  const configDirectoryPath = path.join(directoryPath, '.daylog')

  try {
    fs.accessSync(configDirectoryPath)
    return true
  } catch (e) {
    // if it catches an error it probably doesn't exist yet
    return false
  }
}
