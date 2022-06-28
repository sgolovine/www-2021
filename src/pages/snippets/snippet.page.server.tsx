import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from "vite-plugin-ssr"
import fs from "fs/promises"
import path from "path"
import ReactDOMServer from "react-dom/server"
import React from "react"
import { compilePost } from "~/helpers/compilePost.node"
import { fetchPostDataByFile } from "~/helpers/postHelpers.node"
import { SnippetMeta, SnippetMetaRaw } from "~/model/Snippets"
import { PageContext } from "~/root/types"
import PostTemplate from "~/components/templates/post"

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  // Get the post slug from the URL
  const postSlug = pageContext.urlParsed.pathname.replace(
    "/snippets/snippet/",
    ""
  )

  // Get the slug map from the root of the project
  const slugMap = JSON.parse(
    await fs.readFile(path.resolve(process.cwd(), "post-map.json"), "utf-8")
  )

  // Filter out the post that we need, extract the filePath
  const postRelativeFilepath = slugMap.snippets.filter(
    (post: { filePath: string; slug: string }) => post.slug === postSlug
  )[0].filePath

  // Form the absolute path with the filePath
  const postAbsoluteFilepath = path.resolve(
    process.cwd(),
    "public",
    "snippets",
    postRelativeFilepath
  )

  // Read the post
  const file = await fs.readFile(postAbsoluteFilepath, "utf-8")

  const postMetaRaw = fetchPostDataByFile<SnippetMetaRaw>(file)
  const postMeta: SnippetMeta = {
    ...postMetaRaw,
    // TODO: Fix this odd remapping.
    path: postMetaRaw.slug,
    tags: postMetaRaw.tags.split(","),
  }

  const post = await compilePost(file)

  return {
    pageContext: {
      pageProps: {
        title: postMeta.title,
        description: postMeta.description,
        slug: postMeta.path,
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
