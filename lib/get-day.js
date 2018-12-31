const format = require('date-fns/format')
const zeroFill = require('zero-fill')

module.exports = function getDay (day, date) {
  if (!date) date = new Date()
  const name = format(date, 'dddd')
  const number = day || Number(format(date, 'DD'))
  const numberZeroFilled = zeroFill(2, dayNumber)
  const filename = `${numberZeroFilled}.md`

  return {
    name,
    number,
    numberZeroFilled,
    filename,
    date
  }
}
