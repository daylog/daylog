import frontmatter from 'front-matter'
import { obj } from 'through2'

import readMarkdown from './markdown.js'

async function transform (options) {
	const { attributes, body } = frontmatter(options.file)

	const file = await readMarkdown(body)
	file.md = body
	file.html = file.value
	file.attributes = attributes
	return Object.assign({}, options, file)
}

export default function transformFiles () {
	return obj(async function (data, enc, next) {
		if (data.type === 'directory') {
			return next()
		}

		try {
			const transformedData = await transform(data)
			this.push(transformedData)
			next()
		} catch (err) {
			return next(err)
		}
	})
}

const _transform = transform
export { _transform as transform }
