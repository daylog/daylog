const addWeeks = require('date-fns/addWeeks')

const getSprint = require('./get-sprint')

module.exports = function subSprints (startingSprint, amount) {
  const { start } = startingSprint
  return getSprint(null, addWeeks(start, amount * 2))
}
