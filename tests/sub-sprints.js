import test from 'tape'
import getSprint from '../lib/get-sprint.js'
import subSprints from '../lib/sub-sprints.js'

test('subSprints', function (t) {
	const startingSprint = getSprint(null, new Date('2019-01-01T10:11:00.052Z'))
	const sprint = subSprints(startingSprint, 1)
	t.ok(sprint.number === 26)
	t.end()
})
