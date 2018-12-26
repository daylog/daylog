const format = require('date-fns/format')
const zeroFill = require('zero-fill')

module.exports = function getDay (day, date) {
  if (!date) date = new Date()
  const dayNumber = day || Number(format(date, 'DD'))

  return {
    name: format(date, 'dddd'),
    number: dayNumber,
    numberZeroFilled: zeroFill(2, dayNumber),
    filename: `${dayNumber}.md`,
    date
  }
}
