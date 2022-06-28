import React from "react"
import path from "path"
import fs from "fs/promises"
import {
  escapeInject,
  PageContextBuiltIn,
  dangerouslySkipEscape,
} from "vite-plugin-ssr"
import ReactDOMServer from "react-dom/server"
import { PageContext } from "~/root/types"
import PostTemplate from "~/components/templates/post"
import { PostMetadata } from "~/model/BlogPost"
import { fetchPostDataByFile } from "~/helpers/postHelpers.node"
import { compilePost } from "~/helpers/compilePost.node"

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

  const postMeta = fetchPostDataByFile<PostMetadata>(file)

  const post = await compilePost(file)

  return {
    pageContext: {
      pageProps: {
        title: postMeta.title,
        description: postMeta.description,
        date: postMeta.date,
        slug: postMeta.slug,
        postHtml: post.value,
      },
    },
  }
}

export async function render(pageContext: PageContext) {
  const { pageProps } = pageContext

  const rawHtml = ReactDOMServer.renderToString(
    <PostTemplate
      title={pageProps.title}
      description={pageProps.description}
      date={pageProps.date}
      path={pageProps.slug}
      otherPosts={[]}
      postHtml={pageProps.postHtml}
    />
  )

  const documentHtml = escapeInject`${dangerouslySkipEscape(rawHtml)}`

  return {
    documentHtml,
  }
}
