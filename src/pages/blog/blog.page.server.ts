import { v4 as uuidv4 } from "uuid"
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
    .map(item => {
      const postId = uuidv4()
      return {
        id: postId,
        title: item.title,
        path: `/blog/posts/${item.slug}`,
        description: item.description,
        date: new Date(item.date),
        type: "local",
      }
    })

  return {
    pageContext: {
      pageProps: {
        localPosts: allPostData,
      },
    },
  }
}
