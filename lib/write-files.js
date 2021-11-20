import { writeFile, mkdir } from 'fs/promises'
import * as path from 'path'
import { obj } from 'through2'

export default function writeFiles (options) {
  const { format, output } = options

  return obj(async function (data, enc, next) {
    // TODO: for html, rewrite paths to /{relname without suffix}/index.html
    // TODO: for json, it would be best if it was collected into one big json object
    const filepath = path.join(output, data.relname).replace('.md', `.${format}`)
    const directoryName = path.dirname(filepath)
    let content

    if (format === 'json') {
      content = JSON.stringify(data)
    } else {
      content = data[format]
      if (!content) {
        next(new Error(`format \`${format}\` not available`))
      }
    }

    await mkdir(directoryName, { recursive: true })
    await writeFile(filepath, content)
    next()
  })
}
