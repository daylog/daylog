import { isString } from 'assert-argument'
import { accessSync } from 'fs'
import { join } from 'path'

export default function configExists (directoryPath) {
	isString(directoryPath)

	const configDirectoryPath = join(directoryPath, '.daylog')

	try {
		accessSync(configDirectoryPath)
		return true
	} catch (e) {
		// if it catches an error it probably doesn't exist yet
		return false
	}
}
