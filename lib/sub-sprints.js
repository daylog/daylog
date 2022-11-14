import subWeeks from 'date-fns/subWeeks/index.js'

import getSprint from './get-sprint.js'

export default function subSprints (startingSprint, amount) {
	const { start } = startingSprint
	return getSprint(null, subWeeks(start, amount * 2))
}
