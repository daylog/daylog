const format = require('date-fns/format')
const zeroFill = require('zero-fill')

module.exports = function getDay (day, date) {
  if (!date) date = new Date()
  const dayNumber = day ? zeroFill(2, day).toString() : format(date, 'DD')
  return {
    name: format(date, 'dddd'),
    number: dayNumber,
    filename: `${dayNumber}.md`
  }
}
