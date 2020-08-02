const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createQuarterFile (options) {
  assert.isObject(options, 'options object is required')
  const { quarter, year, startMonth, endMonth } = options

  assert.isObject(quarter, 'options.quarter object is required')

  const quarterTemplate = getTemplate('quarter.md')
  return quarterTemplate({ quarter, year, startMonth, endMonth })
}
