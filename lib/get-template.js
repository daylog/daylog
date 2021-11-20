import { accessSync, readFileSync } from 'fs'
import { join } from 'path'

import handlebars from 'handlebars'
import format from 'date-fns/format/index.js'

handlebars.registerHelper('formatDate', function (date, fmt) {
  return format(date, fmt)
})

import getTemplateDirectories from './get-template-directories.js'

export default function getTemplate (templateName) {
  const templateDirectories = getTemplateDirectories()
  const projectTemplate = join(templateDirectories.project, templateName)
  const defaultTemplate = join(templateDirectories.default, templateName)

  let templateFilepath
  try {
    accessSync(projectTemplate)
    templateFilepath = projectTemplate
  } catch (e) {
    templateFilepath = defaultTemplate
  }

  let templateSource
  try {
    templateSource = readFileSync(templateFilepath, 'utf8')
  } catch (e) {
    throw new Error(`template ${templateName} not found`)
  }

  return handlebars.compile(templateSource)
}
