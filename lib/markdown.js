import { remark } from 'remark'
import html from 'remark-html'
import { visit } from 'unist-util-visit'

export default async function markdown (input) {
  const checklists = []

  function getChecklists () {
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
  }

  const file = await remark()
    .use(getChecklists)
    .use(html)
    .data('settings', { commonmark: true, emphasis: '_', strong: '*' })
    .process(input)
  
  file.checklists = checklists
  return file
}
