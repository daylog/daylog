#! /usr/bin/env node

import { join } from 'desm'
import directoryCommand from 'directory-command'

const directory = join(import.meta.url, '..', 'commands')
const config = {
	directory,
	argv: process.argv.slice(2),
	commandName: 'daylog',
	leftColumnWidth: 30,
	rightColumnWidth: 50,
	context: {}
}

try {
	directoryCommand(config)
} catch (err) {
	console.error(err)
}
