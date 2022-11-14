import test from 'tape'
import addSprints from '../lib/add-sprints.js'
import getSprint from '../lib/get-sprint.js'

test('addSprints', function (t) {
	const startingSprint = getSprint(null, new Date('2019-01-01T10:11:00.052Z'))
	const sprint = addSprints(startingSprint, 1)
	t.ok(sprint.number === 2)
	t.end()
})
