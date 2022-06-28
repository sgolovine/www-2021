import path from "path"
import { fetchPostDataByPath, getPostsPathsByGlob } from "~/helpers/node"
import { SnippetMeta, SnippetMetaRaw } from "~/model/Snippets"

const blogPostPath = path.resolve(process.cwd(), "public", "snippets")

export async function onBeforeRender() {
  const postPaths = await getPostsPathsByGlob(blogPostPath, "*.md")

  const allPostData: SnippetMeta[] = postPaths.files
    .map((path: string) => {
      const postData = fetchPostDataByPath<SnippetMetaRaw>(blogPostPath, path)

      return postData
    })
    .filter(item => item.published)
    .map(item => ({
      id: item.slug,
      title: item.title,
      path: `/snippets/snippet/${item.slug}`,
      description: item.description,
      tags: item.tags.split(","),
      published: item.published,
    }))

  return {
    pageContext: {
      pageProps: {
        snippets: allPostData,
      },
    },
  }
}
