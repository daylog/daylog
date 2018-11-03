const through = require('through2')
const frontmatter = require('front-matter')

const readMarkdown = require('./markdown')

function transform (data, callback) {
  const { attributes, body } = frontmatter(data.file)

  readMarkdown(body, (err, file) => {
    if (err) return callback(err)
    data.md = body
    data.html = file.contents
    data.attributes = attributes
    data.checklists = file.checklists
    callback(null, data)
  })
}

module.exports = function transformFiles () {
  return through.obj(function (data, enc, next) {
    if (data.type === 'directory') {
      return next()
    }

    transform(data, (err, transformedData) => {
      if (err) return next(err)
      this.push(transformedData)
      next()
    })
  })
}

module.exports.transform = transform
