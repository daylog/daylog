const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createYearFile (options) {
  assert.isObject(options, 'options object is required')
  assert.isObject(options.year, 'options.year object is required')

  const year = options.year

  const monthTemplate = getTemplate('year.md')
  return monthTemplate({ year })
}
