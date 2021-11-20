import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createDayFile (options) {
  isObject(options, 'options object is required')
  isObject(options.day, 'options.day object is required')
  isObject(options.month, 'options.month object is required')
  isObject(options.year, 'options.year object is required')

  const day = options.day
  const month = options.month
  const year = options.year

  const dayTemplate = getTemplate('day.md')

  return dayTemplate({
    day,
    month,
    year
  })
}
