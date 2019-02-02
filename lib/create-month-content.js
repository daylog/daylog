const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createDayFile (options) {
  assert.isObject(options, 'options object is required')
  assert.isObject(options.month, 'options.month object is required')
  assert.isObject(options.year, 'options.year object is required')

  const month = options.month
  const year = options.year

  const monthTemplate = getTemplate('month.md')

  return monthTemplate({
    month,
    year
  })
}
