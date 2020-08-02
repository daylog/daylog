const path = require('path')
const subMonths = require('date-fns/subMonths')
const addMonths = require('date-fns/addMonths')
const assert = require('assert-argument')

const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createMonthContent = require('../lib/create-month-content')

module.exports = function (options = {}) {
  assert.isObject(options, 'options object is required')
  let date = new Date()

  if (options.next) {
    date = addMonths(date, 1)
  } else if (options.previous) {
    date = subMonths(date, 1)
  }

  const month = getMonth(options.month, date)
  const year = getYear(options.string, date)

  const monthReadmeFile = createMonthContent({ month, year })

  const monthDirectoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const monthReadmeFilepath = path.join(monthDirectoryPath, 'README.md')

  return {
    directoryPath: monthDirectoryPath,
    filepath: monthReadmeFilepath,
    content: monthReadmeFile
  }
}
