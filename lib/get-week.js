import getISOWeek from 'date-fns/getISOWeek/index.js'
import endOfISOWeek from 'date-fns/endOfISOWeek/index.js'
import startOfISOWeek from 'date-fns/startOfISOWeek/index.js'
import zeroFill from 'zero-fill'

export default function (week, date) {
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
