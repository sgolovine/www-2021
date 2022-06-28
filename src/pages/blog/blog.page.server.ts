import fs from "fs/promises"
import { blogPostRoot, remotePostsMapPath } from "~/defines/paths.node"
import { fetchPostDataByPath, getPostsPathsByGlob } from "~/helpers/node"
import { BlogPostMetadata, PostType, RemotePostMetadata } from "~/model/Posts"

export async function onBeforeRender() {
  const postPaths = await getPostsPathsByGlob(blogPostRoot, "**/*.md")

  const rawRemotePosts = await fs.readFile(remotePostsMapPath, "utf-8")
  const remotePostsJSON = JSON.parse(rawRemotePosts)
  const remotePosts: RemotePostMetadata = remotePostsJSON.posts.map(
    (post: any) => ({
      id: post.id,
      published: true,
      title: post.title,
      description: post.description,
      postType: PostType.RemotePost,
      date: post.date,
      url: post.url,
    })
  )

  const localPosts: BlogPostMetadata[] = postPaths.files
    .map((path: string) => {
      const postData = fetchPostDataByPath<BlogPostMetadata>(blogPostRoot, path)
      return postData
    })
    .filter(item => item.published)
    .map(item => ({
      id: item.slug,
      title: item.title,
      slug: `/blog/post/${item.slug}`,
      description: item.description,
      date: new Date(item.date).toString(),
      published: item.published,
      postType: PostType.Post,
    }))

  return {
    pageContext: {
      pageProps: {
        localPosts,
        remotePosts,
      },
    },
  }
}
