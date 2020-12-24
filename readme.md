# md-to-html

[**unified**][unified] processor to parse and serialize Markdown to HTML.
Powered by my favorite plugins.

[![npm version](https://badge.fury.io/js/%40rqbazan%2Fmd-to-html.svg)](https://badge.fury.io/js/%40rqbazan%2Fmd-to-html)

## Install

```sh
> yarn add @rqbazan/md-to-html
```

## Usage

Say we have the following file, `doc.md`

```md
---
title: This personal site
date: 2020-12-25
author: Santiago Q. Bazan
---

# Sample note :tada:

Here's a quick _sample note_
```

And our script, `index.js`, looks as follows:

```js
import path from 'path'
import fs from 'fs'
import mdToHtml from './index'

function main() {
  const pathfile = path.join(__dirname, 'doc.md')
  const doc = fs.readFileSync(pathfile)
  const vfile = mdToHtml.processSync(doc)

  console.log(vfile.data) // yaml metadata
  console.log(vfile.toString()) // html
}

main()
```

Now, running `node index.js` yields:

```text
λ node index.js
{
  title: 'This personal site',
  date: '2020-12-25',
  author: 'Santiago Q. Bazan'
}
<h1>Sample note <img class="emoji" draggable="false" alt="🎉" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f389.png" title="🎉"/></h1>
<p>Here's a quick <em>sample note</em></p>
```

Here is the generated HTML:

```html
<h1>
  Sample note
  <img
    class="emoji"
    draggable="false"
    alt="🎉"
    src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f389.png"
    title="🎉"
  />
</h1>
<p>Here's a quick <em>sample note</em></p>
```

## Plugins

- [remark-parse](https://www.npmjs.org/package/remark-parse)
- [remark-frontmatter](https://www.npmjs.org/package/remark-frontmatter)
- [remark-extract-frontmatter](https://www.npmjs.org/package/remark-extract-frontmatter)
- [remark-gemoji](https://www.npmjs.org/package/remark-gemoji)
- [remark-twemoji](https://www.npmjs.org/package/remark-twemoji)
- [remark-html](https://www.npmjs.org/package/remark-html)

## License

[MIT][license] © [Ricardo Q. Bazan][author]

<!-- Definitions -->

[unified]: https://github.com/unifiedjs/unified
[author]: https://sxntixgo.codes
[license]: https://github.com/rqbazan/md-to-html/blob/main/LICENSE
