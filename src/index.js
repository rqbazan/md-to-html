import yaml from 'yaml'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkYaml from 'remark-extract-frontmatter'
import remarkGemoji from 'remark-gemoji'
import remarkTwemoji from 'remark-twemoji'
import remarkHtml from 'remark-html'

export default unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkYaml, { yaml: yaml.parse })
  .use(remarkGemoji)
  .use(remarkTwemoji)
  .use(remarkHtml)
  .freeze()
