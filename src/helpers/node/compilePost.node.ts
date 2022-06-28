/**
 * This file is marked as *.node.ts, this means that it will only work
 * with files marked *.server.*
 *
 * Please make sure to not import this into anything that is not
 * a *.server.* file.
 */

import rehypeFormat from "rehype-format"
import rehypeStringify from "rehype-stringify/lib"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse/lib"
import remarkRehype from "remark-rehype"
import remarkPrism from "remark-prism"
import { unified } from "unified"

export async function compilePost(rawFile: string) {
  const post = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(rawFile)

  return post
}
