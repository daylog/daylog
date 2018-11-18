const getWeek = require('week')

module.exports = function (week, date) {
  if (!date) date = new Date()
  return {
    number: (week || getWeek(date))
  }
}
