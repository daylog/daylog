import { join } from 'path'
import subMonths from 'date-fns/subMonths/index.js'
import addMonths from 'date-fns/addMonths/index.js'
import { isObject } from 'assert-argument'

import getMonth from '../lib/get-month.js'
import getYear from '../lib/get-year.js'
import createMonthContent from '../lib/create-month-content.js'

export default function (options = {}) {
  isObject(options, 'options object is required')
  let date = new Date()

  if (options.next) {
    date = addMonths(date, 1)
  } else if (options.previous) {
    date = subMonths(date, 1)
  }

  const month = getMonth(options.month, date)
  const year = getYear(options.string, date)

  const monthReadmeFile = createMonthContent({ month, year })

  const monthDirectoryPath = join(process.cwd(), year.number, month.directoryName)
  const monthReadmeFilepath = join(monthDirectoryPath, 'README.md')

  return {
    directoryPath: monthDirectoryPath,
    filepath: monthReadmeFilepath,
    content: monthReadmeFile
  }
}
