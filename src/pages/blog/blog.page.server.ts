import path from "path"
import { BlogPost } from "~/model/BlogPost"
import { fetchPostData, getPostsPathsByGlob } from "~/helpers/postHelpers.node"

const blogPostPath = path.resolve(process.cwd(), "public", "posts")

type PostMetadata = {
  title: string
  description: string
  date: string
  slug: string
  published: boolean
}

export async function onBeforeRender() {
  const postPaths = await getPostsPathsByGlob(blogPostPath, "**/*.md")
  const allPostData: BlogPost[] = postPaths.files
    .map((path: string) => {
      const postData = fetchPostData<PostMetadata>(blogPostPath, path)
      return postData
    })
    .filter(item => item.published)
    .map(item => ({
      id: item.slug,
      title: item.title,
      path: `/blog/post/${item.slug}`,
      description: item.description,
      date: new Date(item.date),
      type: "local",
    }))

  return {
    pageContext: {
      pageProps: {
        localPosts: allPostData,
      },
    },
  }
}
