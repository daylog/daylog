const getMonth = require('./get-week')

const quarters = [
  { name: 'Winter', number: 1 },
  { name: 'Spring', number: 2 },
  { name: 'Summer', number: 3 },
  { name: 'Fall', number: 4 }
]

module.exports = function (quarter, date) {
  if (!date) date = new Date()

  if (quarter) {
    return quarters.find((q) => {
      return q.name === quarter || q.number === quarter
    })
  }

  const month = getMonth(null, date)

  if (month.number <= 3) {
    return quarters[0]
  }

  if (month.number <= 6) {
    return quarters[1]
  }

  if (month.number <= 9) {
    return quarters[2]
  }

  return quarters[3]
}
