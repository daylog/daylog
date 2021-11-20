import format from 'date-fns/format/index.js'
import months from 'months'
import zeroFill from 'zero-fill'

import capitalize from './capitalize-first-letter.js'

export default function getMonth (month, date) {
  if (!date) date = new Date()
  let monthName, monthNumber

  if (month) {
    if (typeof month === 'number') {
      monthNumber = zeroFill(2, month)
      monthName = months[month]
    } else if (typeof month === 'string') {
      monthName = capitalize(month)
      monthNumber = zeroFill(2, months.indexOf(monthName) + 1)
      if (monthNumber <= 0) {
        throw new Error('month not found:' + month)
      }
    } else {
      throw new Error('month arg must be a string or number')
    }
  } else {
    monthName = format(date, 'MMMM')
    monthNumber = format(date, 'MM')
  }

  return {
    name: monthName,
    number: monthNumber,
    directoryName: `${monthNumber}-${monthName.toLowerCase()}`
  }
}
