const fs = require('fs')
const path = require('path')
const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createDayFile (options) {
  assert.isObject(options, 'options object is required')
  assert.isObject(options.day, 'options.day object is required')
  assert.isObject(options.month, 'options.month object is required')
  assert.isObject(options.year, 'options.year object is required')

  const day = options.day
  const month = options.month
  const year = options.year

  const dayTemplate = getTemplate('day.md')

  return dayTemplate({
    day,
    month,
    year
  })
}
