const subWeeks = require('date-fns/subWeeks')

const getSprint = require('./get-sprint')

module.exports = function subSprints (startingSprint, amount) {
  const { start } = startingSprint
  return getSprint(null, subWeeks(start, amount * 2))
}
