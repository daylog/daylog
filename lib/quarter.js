const path = require('path')
const subQuarters = require('date-fns/sub_quarters')
const addQuarters = require('date-fns/add_quarters')
const assert = require('assert-argument')

const getQuarter = require('../lib/get-quarter')
const getYear = require('../lib/get-year')
const createQuarterContent = require('../lib/create-quarter-content')

module.exports = function (options = {}) {
  assert.isObject(options, 'options object is required')
  let date = new Date()

  if (options.next) {
    date = addQuarters(date, 1)
  } else if (options.previous) {
    date = subQuarters(date, 1)
  }

  const quarter = getQuarter(options.quarter, date)
  const { startMonth, endMonth } = quarter

  let dateForYear = date
  if (quarter.number === 1) {
    dateForYear = quarter.end
  }

  const year = getYear(options.year, dateForYear)

  const content = createQuarterContent({ quarter, year, startMonth, endMonth })
  const directoryPath = path.join(process.cwd(), year.number, 'quarters')
  const filepath = path.join(directoryPath, `${quarter.name.toLowerCase()}.md`)

  return {
    directoryPath,
    filepath,
    content
  }
}
