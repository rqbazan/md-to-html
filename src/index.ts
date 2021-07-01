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

export const defaultOptions: MdToHtmlOptions = {
  twemoji: {
    size: 32,
    attributes: () => ({ height: '16', width: '16' }),
  },
}

export function buildProcessor(options: MdToHtmlOptions = defaultOptions) {
  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkYaml, { yaml: yaml.parse })
    .use(remarkGemoji)
    .use(remarkTwemoji, options.twemoji)
    .use(remarkHtml)
    .freeze()
}

const mdToHtml = buildProcessor()

export default mdToHtml
