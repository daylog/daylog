import { join } from 'path'
import subDays from 'date-fns/subDays/index.js'
import addDays from 'date-fns/addDays/index.js'
import { isObject } from 'assert-argument'

import getDay from '../lib/get-day.js'
import getMonth from '../lib/get-month.js'
import getYear from '../lib/get-year.js'
import createDayContent from '../lib/create-day-content.js'

export default function (options = {}) {
  isObject(options, 'options object is required')
  let date = new Date()

  if (options.next) {
    date = addDays(date, 1)
  } else if (options.previous) {
    date = subDays(date, 1)
  }

  const day = getDay(options.day, date)
  const month = getMonth(options.month, date)
  const year = getYear(options.year, date)

  const content = createDayContent({
    day,
    month,
    year
  })

  const directoryPath = join(process.cwd(), year.number, month.directoryName)
  const filepath = join(directoryPath, day.filename)

  return {
    directoryPath,
    filepath,
    content
  }
}
