import assert from 'assert'
import reader from 'folder-reader'
import { mkdir } from 'fs/promises'
import pump from 'pump'

import transformFiles from '../transform-files.js'
import writeFiles from '../write-files.js'

// TODO: refactor to use separate approaches for html & json
// TODO: html will rewrite to use /{name}/index.html paths
// TODO: json will be compiled into one big file
export default async function build (options) {
	assert(options && typeof options === 'object', 'options object is required')
	const { format, output, notesDirectory } = options
	assert(output && typeof output === 'string', '--output directory path is required')

	// TODO: exlude build directory from reader
	// TODO: exclude any files/directories that start with a period or underscore
	return new Promise((resolve, reject) => {
		mkdir(output, { recursive: true })
			.catch(reject)

		pump(reader(notesDirectory), transformFiles(), writeFiles({ format, output }), (err) => {
			if (err) {
				return reject(err)
			}

			resolve()
		})
	})
}
