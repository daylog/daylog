import test from 'tape'
import getQuarter from '../lib/get-quarter.js'

test('getQuarter', function (t) {
  const quarter = getQuarter(null, new Date('2019-01-02'))
  t.ok(quarter.number === 1)
  t.ok(quarter.start)
  t.ok(quarter.end)
  t.end()
})

test('getQuarter current', function (t) {
  const quarter = getQuarter()
  t.ok(quarter.number)
  t.ok(quarter.start)
  t.ok(quarter.end)
  t.end()
})
