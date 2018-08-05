const remark = require('remark')
const html = require('remark-html')
const visit = require('unist-util-visit')

module.exports = function markdown (input, callback) {
  const checklists = []

  return remark()
    .use(function getChecklists () {
      return function transformer (tree) {
        visit(tree, function visitor (node, i, parent) {
          if (!node.children) return

          if (node.type === 'list') {
            const headerNode = parent.children[i - 1]

            if (headerNode && headerNode.children[0] && headerNode.children[0].value) {
              const header = headerNode.children[0].value.toLowerCase()

              const list = node.children.map((item) => {
                return { checked: item.checked, text: item.children[0].value }
              })

              checklists.push({ header, list })
            }
          }
        })
      }
    })
    .use(html)
    .data('settings', { commonmark: true, emphasis: '_', strong: '*' })
    .process(input, function (err, file) {
      if (err) return callback(err)
      file.checklists = checklists
      callback(null, file)
    })
}


