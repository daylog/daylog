const assert = require('assert-argument')

const getTemplate = require('../lib/get-template')

module.exports = function createSprintFile (options) {
  assert.isObject(options, 'options object is required')
  const { sprint, year } = options

  assert.isObject(sprint, 'options.sprint object is required')

  const sprintTemplate = getTemplate('sprint.md')
  return sprintTemplate({ sprint, year })
}
