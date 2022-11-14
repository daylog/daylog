import * as desm from 'desm'
import * as path from 'path'

export default function getTemplateDirectories () {
	const projectTemplatesDirectory = path.join(process.cwd(), '.daylog', 'templates')
	const defaultTemplatesDirectory = desm.join(import.meta.url, '..', 'templates')

	return {
		project: projectTemplatesDirectory,
		default: defaultTemplatesDirectory
	}
}
