const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const assert = require('assert-argument')
const reader = require('folder-reader')
const through = require('through2')
const pump = require('pump')

module.exports = async function createConfig (directoryPath, config) {
  assert.isString(directoryPath)
  assert.isObject(config)
  assert.isObject(config.dateFileTypes)

  const configDirectoryPath = path.join(directoryPath, '.daylog')
  const templatesDirectoryPath = path.join(configDirectoryPath, 'templates')
  const defaultTemplatesDirectory = path.join(__dirname, '..', '..', 'templates')
  const configFilepath = path.join(configDirectoryPath, 'config.json')

  try {
    fs.accessSync(configDirectoryPath)
    console.log('.daylog config directory already exists')
  } catch (e) {
    // if it catches an error it probably doesn't exist yet

    mkdirp.sync(templatesDirectoryPath)
    fs.writeFileSync(configFilepath, JSON.stringify(config, null, 2))

    const stream = reader(defaultTemplatesDirectory)

    pump(stream, through.obj(function (data, enc, next) {
      const fileType = data.relname.replace('.md', '')

      if (!config.dateFileTypes[fileType]) {
        return next()
      }

      const filepath = path.join(templatesDirectoryPath, data.relname)
      fs.writeFile(filepath, data.file, next)
    }))
  }
}
