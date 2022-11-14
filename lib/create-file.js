import { isObject, isString } from 'assert-argument'
import { access, mkdir, writeFile } from 'fs/promises'

export default async function createFile (options) {
	isObject(options)

	const { filepath, content, directoryPath } = options

	isString(filepath)
	isString(directoryPath)
	isString(content)

	await mkdir(directoryPath, { recursive: true })

	try {
		await access(filepath)
	} catch (e) {
		await writeFile(filepath, content)
	}
}
