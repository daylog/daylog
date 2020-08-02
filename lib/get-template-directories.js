const path = require('path')

module.exports = function getTemplateDirectories () {
  const projectTemplatesDirectory = path.join(process.cwd(), '.daylog', 'templates')
  const defaultTemplatesDirectory = path.join(__dirname, '..', 'templates')

  return {
    project: projectTemplatesDirectory,
    default: defaultTemplatesDirectory
  }
}
