import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createWeekFile (options) {
	isObject(options, 'options object is required')
	const { week, year } = options

	isObject(week, 'options.week object is required')

	const weekTemplate = getTemplate('week.md')
	return weekTemplate({ week, year })
}
