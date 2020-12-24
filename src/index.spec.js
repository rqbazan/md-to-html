import fs from 'fs'
import path from 'path'
import mdToHtml from './index'

test('should return the html and metadata', async () => {
  const filepath = path.join(__dirname, 'fixtures', '01.md')
  const doc = await fs.promises.readFile(filepath)
  const vfile = mdToHtml.processSync(doc)

  expect(vfile.data).toMatchInlineSnapshot(`
    Object {
      "author": "Santiago Q. Bazan",
      "date": "2020-12-25",
      "title": "This personal site",
    }
  `)

  expect(vfile.toString()).toMatchInlineSnapshot(`
    "<h1>Sample note <img class=\\"emoji\\" draggable=\\"false\\" alt=\\"🎉\\" src=\\"https://twemoji.maxcdn.com/v/13.0.1/72x72/1f389.png\\" title=\\"🎉\\"/></h1>
    <p>Here's a quick sample note that shows you some of the most common use cases:</p>
    <ul>
    <li>Style text in <em>different</em> ways <strong><em>like this</em></strong>.</li>
    <li>Add links, like <a href=\\"https://collectednotes.com/blog\\">this one</a></li>
    <li>Show images</li>
    </ul>
    <p><img src=\\"https://photos.collectednotes.com/embed.png\\" alt=\\"a logo\\"></p>
    <hr>
    <blockquote>
    <p>You can learn more about <strong>Markdown</strong> by going to: https://www.markdownguide.org/basic-syntax/</p>
    </blockquote>
    "
  `)
})
