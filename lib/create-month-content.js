import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createDayFile (options) {
	isObject(options, 'options object is required')
	isObject(options.month, 'options.month object is required')
	isObject(options.year, 'options.year object is required')

	const month = options.month
	const year = options.year

	const monthTemplate = getTemplate('month.md')

	return monthTemplate({
		month,
		year
	})
}
