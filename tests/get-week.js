const test = require('tape')
const getWeek = require('../lib/get-week')

test('getWeek', function (t) {
  const week = getWeek(null, new Date('2019-01-01T10:11:00.052Z'))
  t.ok(week.number === 1)
  t.ok(week.start)
  t.ok(week.end)
  t.end()
})

test('getWeek current', function (t) {
  const week = getWeek()
  t.ok(week.number)
  t.ok(week.start)
  t.ok(week.end)
  t.end()
})
