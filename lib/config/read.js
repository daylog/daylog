import { isString } from 'assert-argument'
import { readFileSync } from 'fs'
import { join } from 'path'

export default function createConfig (directoryPath) {
	isString(directoryPath)

	const configDirectoryPath = join(directoryPath, '.daylog')
	const configFilepath = join(configDirectoryPath, 'config.json')

	const fileContent = readFileSync(configFilepath)
	const settings = JSON.parse(fileContent)

	return settings
}
