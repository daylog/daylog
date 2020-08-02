const path = require('path')
const subDays = require('date-fns/sub_days')
const addDays = require('date-fns/add_days')
const assert = require('assert-argument')

const getDay = require('../lib/get-day')
const getMonth = require('../lib/get-month')
const getYear = require('../lib/get-year')
const createDayContent = require('../lib/create-day-content')

module.exports = function (options = {}) {
  assert.isObject(options, 'options object is required')
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

  const directoryPath = path.join(process.cwd(), year.number, month.directoryName)
  const filepath = path.join(directoryPath, day.filename)

  return {
    directoryPath,
    filepath,
    content
  }
}
