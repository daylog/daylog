const fs = require('fs')
const path = require('path')

const handlebars = require('handlebars')
const format = require('date-fns/format')

handlebars.registerHelper('formatDate', function (date, fmt) {
  return format(date, fmt)
})

const getTemplateDirectories = require('./get-template-directories')

module.exports = function getTemplate (templateName) {
  const templateDirectories = getTemplateDirectories()
  const projectTemplate = path.join(templateDirectories.project, templateName)
  const defaultTemplate = path.join(templateDirectories.default, templateName)

  let templateFilepath
  try {
    fs.accessSync(projectTemplate)
    templateFilepath = projectTemplate
  } catch (e) {
    templateFilepath = defaultTemplate
  }

  let templateSource
  try {
    templateSource = fs.readFileSync(templateFilepath, 'utf8')
  } catch (e) {
    throw new Error(`template ${templateName} not found`)
  }

  return handlebars.compile(templateSource)
}
