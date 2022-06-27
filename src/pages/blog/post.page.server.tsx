import React from "react"
import path from "path"
import fs from "fs/promises"
import {
  escapeInject,
  PageContextBuiltIn,
  dangerouslySkipEscape,
} from "vite-plugin-ssr"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeFormat from "rehype-format"
import rehypeStringify from "rehype-stringify"
import ReactDOMServer from "react-dom/server"
import { PageContext } from "~/root/types"
import PostTemplate from "~/templates/post"

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  // Get the post slug from the URL
  const postSlug = pageContext.urlParsed.pathname.replace("/blog/post/", "")

  // Get the slug map from the root of the project
  const slugMap = JSON.parse(
    await fs.readFile(path.resolve(process.cwd(), "post-map.json"), "utf-8")
  )

  // Filter out the post that we need, extract the filePath
  const postRelativeFilepath = slugMap.posts.filter(
    (post: { filePath: string; slug: string }) => post.slug === postSlug
  )[0].filePath

  // Form the absolute path with the filePath
  const postAbsoluteFilepath = path.resolve(
    process.cwd(),
    "public",
    "posts",
    postRelativeFilepath
  )

  // Read the post
  const file = await fs.readFile(postAbsoluteFilepath, "utf-8")

  const post = await unified()
    // Allow unified to read the markdown file
    .use(remarkParse)
    // Add support for frontmatter
    .use(remarkFrontmatter)
    // Add support for "Github Flavored Markdown"
    .use(remarkGfm)
    // Transform MD -> HTML
    .use(remarkRehype)
    // Format the resulting HTML
    .use(rehypeFormat)
    // Serialize HTML
    .use(rehypeStringify)
    // Finally Process the Markdown File
    .process(file)

  return {
    pageContext: {
      pageProps: {
        postHtml: post.value,
      },
    },
  }
}

export async function render(pageContext: PageContext) {
  const { pageProps } = pageContext

  const rawHtml = ReactDOMServer.renderToString(
    <PostTemplate
      title="Post"
      description="Desc"
      date="1/1/2022"
      path="/foo/bar"
      otherPosts={[]}
      postHtml={pageProps.postHtml}
    />
  )

  const documentHtml = escapeInject`${dangerouslySkipEscape(rawHtml)}`

  return {
    documentHtml,
  }
}
