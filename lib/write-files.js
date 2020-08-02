const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const through = require('through2')

module.exports = function writeFiles (options) {
  const { format, output } = options

  return through.obj(function (data, enc, next) {
    // TODO: for html, rewrite paths to /{relname without suffix}/index.html
    // TODO: for json, it would be best if it was collected into one big json object

    const filepath = path.join(output, data.relname).replace('.md', `.${format}`)
    const dirname = path.dirname(filepath)
    let content

    if (format === 'json') {
      content = JSON.stringify(data)
    } else {
      content = data[format]
      if (!content) {
        next(new Error(`format \`${format}\` not available`))
      }
    }

    mkdirp(dirname, (err) => {
      if (err) return next(err)
      fs.writeFile(filepath, content, next)
    })
  })
}
