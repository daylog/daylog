import build from '../lib/build/index.js'

async function command (args, flags, context) {
	const { notesDirectory } = args
	const { format, output } = flags

	await build({ notesDirectory, format, output })
}

const args = [
	{
		name: 'notesDirectory',
		type: 'string',
		default: process.cwd()
	}
]

const flags = [
	{
		name: 'format',
		alias: 'f',
		type: 'string',
		default: 'html',
		description: 'format for output'
	},
	{
		name: 'output',
		alias: 'o',
		description: 'output directory for files (required)'
	}
]

const options = {
	description: 'create an html or json build of a daylog project'
}

export default {
	command,
	flags,
	args,
	options
}
