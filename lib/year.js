import { isObject } from 'assert-argument'
import { join } from 'path'

import createYearContent from '../lib/create-year-content.js'
import getYear from '../lib/get-year.js'

export default function (options = {}) {
	isObject(options, 'options object is required')

	const date = new Date()
	const year = getYear(options.year, date)
	const content = createYearContent({ year })
	const directoryPath = join(process.cwd(), year.number)
	const filepath = join(directoryPath, 'README.md')

	return {
		directoryPath,
		filepath,
		content
	}
}
