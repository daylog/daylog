import { access, mkdir, writeFile } from 'fs/promises'
import * as path from 'path'

import { isObject, isString } from 'assert-argument'
import * as desm from 'desm'
import reader from 'folder-reader'
import pump from 'pump'
import { obj } from 'through2'

export default async function createConfig (directoryPath, config) {
	isString(directoryPath)
	isObject(config)
	isObject(config.dateFileTypes)

	const configDirectoryPath = path.join(directoryPath, '.daylog')
	const templatesDirectoryPath = path.join(configDirectoryPath, 'templates')
	const defaultTemplatesDirectory = desm.join(import.meta.url, '..', '..', 'templates')
	const configFilepath = path.join(configDirectoryPath, 'config.json')

	try {
		await access(configDirectoryPath)
		console.log('.daylog config directory already exists')
	} catch (e) {
		// if it catches an error it probably doesn't exist yet

		await mkdir(templatesDirectoryPath, { recursive: true })
		await writeFile(configFilepath, JSON.stringify(config, null, 2))

		const stream = reader(defaultTemplatesDirectory)

		pump(
			stream,
			obj(async function (data, enc, next) {
				const fileType = data.relname.replace('.md', '')

				if (!config.dateFileTypes[fileType]) {
					return next()
				}

				const filepath = path.join(templatesDirectoryPath, data.relname)
				await writeFile(filepath, data.file)
				next()
			})
		)
	}
}
