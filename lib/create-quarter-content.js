import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createQuarterFile (options) {
  isObject(options, 'options object is required')
  const { quarter, year, startMonth, endMonth } = options

  isObject(quarter, 'options.quarter object is required')

  const quarterTemplate = getTemplate('quarter.md')
  return quarterTemplate({ quarter, year, startMonth, endMonth })
}
