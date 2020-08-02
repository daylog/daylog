const path = require('path')
const assert = require('assert-argument')

const getYear = require('../lib/get-year')
const createYearContent = require('../lib/create-year-content')

module.exports = function (options = {}) {
  assert.isObject(options, 'options object is required')

  let date = new Date()
  const year = getYear(options.year, date)
  const content = createYearContent({ year })
  const directoryPath = path.join(process.cwd(), year.number)
  const filepath = path.join(directoryPath, 'README.md')

  return {
    directoryPath,
    filepath,
    content
  }
}
