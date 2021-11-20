import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createYearFile (options) {
  isObject(options, 'options object is required')
  isObject(options.year, 'options.year object is required')

  const year = options.year

  const monthTemplate = getTemplate('year.md')
  return monthTemplate({ year })
}
