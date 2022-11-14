import { isObject } from 'assert-argument'
import { join } from 'path'
import addSprints from './add-sprints.js'
import subSprints from './sub-sprints.js'

import createSprintContent from '../lib/create-sprint-content.js'
import getSprint from '../lib/get-sprint.js'
import getYear from '../lib/get-year.js'

export default function (options = {}) {
	isObject(options, 'options object is required')
	let date = new Date()
	let sprint = getSprint(options.sprint, date)

	if (options.next) {
		sprint = addSprints(sprint, 1)
		date = sprint.start
	} else if (options.previous) {
		sprint = subSprints(sprint, 1)
		date = sprint.start
	}

	let dateForYear = date
	if (sprint.number === 1) {
		dateForYear = sprint.end
	}

	const year = getYear(options.year, dateForYear)

	const content = createSprintContent({ sprint, year })
	const directoryPath = join(process.cwd(), year.number, 'sprints')
	const filepath = join(directoryPath, `${sprint.numberZeroFilled}.md`)

	return {
		directoryPath,
		filepath,
		content
	}
}
