import test from 'tape'
import getDay from '../lib/get-day.js'

test('getDay', function (t) {
  const day = getDay(null, new Date('2019-01-01T10:11:00.052Z'))
  t.ok(day)
  t.ok(day.name && day.name === 'Tuesday')
  t.ok(day.number && day.number === 1)
  t.ok(day.numberZeroFilled && day.numberZeroFilled === '01')
  t.ok(day.date)
  t.end()
})

test('getDay current', function (t) {
  const day = getDay()
  t.ok(day)
  t.ok(day.name && typeof day.name === 'string')
  t.ok(day.number && typeof day.number === 'number')
  t.ok(day.numberZeroFilled && typeof day.numberZeroFilled === 'string')
  t.ok(day.date)
  t.end()
})
