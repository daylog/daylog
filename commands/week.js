import createFile from '../lib/create-file.js'
import week from '../lib/week.js'

function command (args, flags, context) {
	createFile(week({
		next: flags.next,
		previous: flags.previous,
		week: args.week,
		year: args.year
	}))
}

const args = [
	{
		name: 'week',
		type: 'integer'
	},
	{
		name: 'year',
		type: 'integer'
	}
]

const flags = [
	{
		name: 'next',
		alias: 'n',
		type: 'boolean',
		default: false,
		description: 'make a week file for the next week'
	},
	{
		name: 'previous',
		alias: 'p',
		type: 'boolean',
		default: false,
		description: 'make a week file for the previous week'
	}
]

const options = {
	description: 'create a new file for a week of the year',
	examples: [
		{
			command: 'daylog week',
			description: 'make a file for the current week'
		},
		{
			command: 'daylog week 52',
			description: 'make a file for a specific week'
		},
		{
			command: 'daylog week --next',
			description: 'make a file for the next week'
		},
		{
			command: 'daylog week --previous',
			description: 'make a file for the previous week'
		}
	]
}

export default {
	command,
	args,
	flags,
	options
}
