const addWeeks = require('date-fns/add_weeks')

const getSprint = require('./get-sprint')

module.exports = function subSprints (startingSprint, amount) {
  const { start } = startingSprint
  return getSprint(null, addWeeks(start, amount * 2))
}
