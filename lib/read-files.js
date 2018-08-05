const path = require('path')
const reader = require('folder-reader')
const through = require('through2')
const pump = require('pump')
const frontmatter = require('front-matter')

const readMarkdown = require('./markdown')

module.exports = function readFiles (dir) {
  const format = through.obj(function (data, enc, next) {
    if (data.type === 'directory') {
      return next()
    }

    const { attributes, body } = frontmatter(data.file)

    readMarkdown(body, (err, file) => {
      data.md = body
      data.html = file.contents
      data.attributes = attributes
      data.checklists = file.checklists

      this.push(data)
      next()
    })
  })

  return pump(reader(dir), format)
}
