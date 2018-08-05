const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const through = require('through2')
const pump = require('pump')

module.exports = function writeFiles (options) {
  const { format, output } = options

  return through.obj(function (data, enc, next) {
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
