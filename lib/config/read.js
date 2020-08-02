const fs = require('fs')
const path = require('path')
const assert = require('assert-argument')

module.exports = function createConfig (directoryPath) {
  assert.isString(directoryPath)

  const configDirectoryPath = path.join(directoryPath, '.daylog')
  const configFilepath = path.join(configDirectoryPath, 'config.json')

  const fileContent = fs.readFileSync(configFilepath)
  const settings = JSON.parse(fileContent)

  return settings
}
