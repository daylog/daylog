import { isObject } from 'assert-argument'
import addQuarters from 'date-fns/addQuarters/index.js'
import subQuarters from 'date-fns/subQuarters/index.js'
import { join } from 'path'

import createQuarterContent from '../lib/create-quarter-content.js'
import getQuarter from '../lib/get-quarter.js'
import getYear from '../lib/get-year.js'

export default function (options = {}) {
	isObject(options, 'options object is required')
	let date = new Date()

	if (options.next) {
		date = addQuarters(date, 1)
	} else if (options.previous) {
		date = subQuarters(date, 1)
	}

	const quarter = getQuarter(options.quarter, date)
	const { startMonth, endMonth } = quarter

	let dateForYear = date
	if (quarter.number === 1) {
		dateForYear = quarter.end
	}

	const year = getYear(options.year, dateForYear)

	const content = createQuarterContent({ quarter, year, startMonth, endMonth })
	const directoryPath = join(process.cwd(), year.number, 'quarters')
	const filepath = join(directoryPath, `${quarter.name.toLowerCase()}.md`)

	return {
		directoryPath,
		filepath,
		content
	}
}
