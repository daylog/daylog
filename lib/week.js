const path = require('path')
const subWeeks = require('date-fns/subWeeks')
const addWeeks = require('date-fns/addWeeks')
const assert = require('assert-argument')

const getWeek = require('../lib/get-week')
const getYear = require('../lib/get-year')
const createWeekContent = require('../lib/create-week-content')

module.exports = function (options = {}) {
  assert.isObject(options, 'options object is required')
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
  const directoryPath = path.join(process.cwd(), year.number, 'weeks')
  const filepath = path.join(directoryPath, `${week.numberZeroFilled}.md`)

  return {
    directoryPath,
    filepath,
    content
  }
}
