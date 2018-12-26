const zeroFill = require('zero-fill')
const getWeek = require('./get-week')
const addWeeks = require('date-fns/add_weeks')
const subWeeks = require('date-fns/sub_weeks')
const format = require('date-fns/format')

function isOdd(x) { return x & 1; };

module.exports = function (sprint, date) {
  if (!date) date = new Date()

  const week = getWeek(null, date)
  const number = (sprint || Math.round(week.number / 2))
  const numberZeroFilled = zeroFill(2, number)

  const weeks = [week]
  if (week.number < 53) {
    if (isOdd(week.number)) {
      weeks.push(getWeek(week.number + 1, addWeeks(week.start, 1)))
    } else {
      weeks.unshift(getWeek(week.number - 1, subWeeks(week.start, 1)))
    }
  }

  const start = weeks[0].start
  const end = weeks[1].end

  return {
    weeks,
    number,
    numberZeroFilled,
    start,
    end
  }
}
