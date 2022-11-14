import { isObject } from 'assert-argument'

import getTemplate from '../lib/get-template.js'

export default function createSprintFile (options) {
	isObject(options, 'options object is required')
	const { sprint, year } = options

	isObject(sprint, 'options.sprint object is required')

	const sprintTemplate = getTemplate('sprint.md')
	return sprintTemplate({ sprint, year })
}
