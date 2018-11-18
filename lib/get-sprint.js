const zeroFill = require('zero-fill')
const getWeek = require('./get-week')

module.exports = function (sprint, date) {
  if (!date) date = new Date()

  const week = getWeek(null, date)
  const number = (sprint || Math.round(week.number / 2))
  const numberZeroFilled = zeroFill(2, number)

  return {
    number,
    numberZeroFilled
  }
}
