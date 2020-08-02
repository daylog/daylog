const getISOWeek = require('date-fns/getISOWeek')
const endOfISOWeek = require('date-fns/endOfISOWeek')
const startOfISOWeek = require('date-fns/startOfISOWeek')
const zeroFill = require('zero-fill')

module.exports = function (week, date) {
  if (!date) date = new Date()
  const number = week || getISOWeek(date)
  const numberZeroFilled = zeroFill(2, number)

  const start = startOfISOWeek(date)
  const end = endOfISOWeek(date)

  return {
    number,
    numberZeroFilled,
    start,
    end
  }
}
