import { join } from 'path'
import subWeeks from 'date-fns/subWeeks/index.js'
import addWeeks from 'date-fns/addWeeks/index.js'
import { isObject } from 'assert-argument'

import getWeek from '../lib/get-week.js'
import getYear from '../lib/get-year.js'
import createWeekContent from '../lib/create-week-content.js'

export default function (options = {}) {
  isObject(options, 'options object is required')
  let date = new Date()

  if (options.next) {
    date = addWeeks(date, 1)
  } else if (options.previous) {
    date = subWeeks(date, 1)
  }

  const week = getWeek(options.week, date)

  let dateForYear = date
  if (week.number === 1) {
    dateForYear = week.end
  }

  const year = getYear(options.year, dateForYear)

  const content = createWeekContent({ week, year })
  const directoryPath = join(process.cwd(), year.number, 'weeks')
  const filepath = join(directoryPath, `${week.numberZeroFilled}.md`)

  return {
    directoryPath,
    filepath,
    content
  }
}
