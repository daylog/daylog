const getISOWeek = require('date-fns/get_iso_week')
const endOfISOWeek = require('date-fns/end_of_iso_week')
const startOfISOWeek = require('date-fns/start_of_iso_week')
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
