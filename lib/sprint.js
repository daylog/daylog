const path = require('path')
const addSprints = require('./add-sprints')
const subSprints = require('./sub-sprints')
const assert = require('assert-argument')

const getSprint = require('../lib/get-sprint')
const getYear = require('../lib/get-year')
const createSprintContent = require('../lib/create-sprint-content')

module.exports = function (options) {
  assert.isObject(options, 'options object is required')
  let date = new Date()
  let sprint = getSprint(options.sprint, date)

  if (options.next) {
    sprint = addSprints(sprint, 1)
    date = sprint.start
  } else if (options.previous) {
    sprint = subSprints(sprint, 1)
    date = sprint.start
  }

  let dateForYear = date
  if (sprint.number === 1) {
    dateForYear = sprint.end
  }

  const year = getYear(options.year, dateForYear)

  const content = createSprintContent({ sprint, year })
  const directoryPath = path.join(process.cwd(), year.number, 'sprints')
  const filepath = path.join(directoryPath, `${sprint.numberZeroFilled}.md`)

  return {
    directoryPath,
    filepath,
    content
  }
}
