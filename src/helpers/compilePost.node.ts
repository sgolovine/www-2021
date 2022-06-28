import rehypeFormat from "rehype-format"
import rehypeStringify from "rehype-stringify/lib"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse/lib"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export async function compilePost(rawFile: string) {
  const post = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(rawFile)

  return post
}
