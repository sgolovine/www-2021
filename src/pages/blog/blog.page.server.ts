import { fetchPostData, getPostsPathsByGlob } from "~/helpers/postHelpers.node"
import { blogPostRoot } from "~/defines/paths.node"
import { BlogPostMetadata, PostType } from "~/model/Posts"

export async function onBeforeRender() {
  const postPaths = await getPostsPathsByGlob(blogPostRoot, "**/*.md")
  const allPostData: BlogPostMetadata[] = postPaths.files
    .map((path: string) => {
      const postData = fetchPostData<BlogPostMetadata>(blogPostRoot, path)
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
        localPosts: allPostData,
      },
    },
  }
}
