const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createWeekFile (options) {
  assert.isObject(options, 'options object is required')
  const { week, year } = options

  assert.isObject(week, 'options.week object is required')

  const weekTemplate = getTemplate('week.md')
  return weekTemplate({ week, year })
}
