import yaml from 'yaml'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkYaml from 'remark-extract-frontmatter'
import remarkGemoji from 'remark-gemoji'
import remarkTwemoji from 'remark-twemoji'
import remarkHtml from 'remark-html'

export interface MdToHtmlOptions {
  twemoji?: {
    size?: number | string
    attributes?: () => object
  }
}

export function buildProcessor(options?: MdToHtmlOptions) {
  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkYaml, { yaml: yaml.parse })
    .use(remarkGemoji)
    .use(remarkTwemoji, options && options.twemoji)
    .use(remarkHtml)
    .freeze()
}

const mdToHtml = buildProcessor()

export default mdToHtml
