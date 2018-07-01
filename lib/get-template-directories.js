const fs = require('fs')
const path = require('path')

module.exports = function getTemplateDirectories () {
  const projectTemplatesDirectory = path.join(process.cwd(), '_templates')
  const defaultTemplatesDirectory = path.join(__dirname, '..', 'templates')

  return {
    project: projectTemplatesDirectory,
    default: defaultTemplatesDirectory
  }
}
