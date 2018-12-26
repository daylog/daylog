const test = require('tape')
const getSprint = require('../lib/get-sprint')

test('getSprint', function (t) {
  const sprint = getSprint(null, new Date('2019-01-01T10:11:00.052Z'))
  t.ok(sprint.number)
  t.ok(sprint.weeks && sprint.weeks.length === 2)
  t.end()
})

test('getSprint current', function (t) {
  const sprint = getSprint()
  t.ok(sprint.number)
  t.ok(sprint.weeks && sprint.weeks.length === 2)
  t.end()
})
