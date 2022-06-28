import { blogPostRoot } from "~/defines/paths.node"
import { BlogPostMetadata, PostType } from "~/model/Posts"
import { fetchPostDataByPath } from "./fetchPostData.node"
import { getPostsPathsByGlob } from "./getPostPathsByGlob.node"

/**
 *
 * @returns Promise with an array of blog post metadata
 */
export async function fetchBlogPostList(): Promise<BlogPostMetadata[]> {
  const { files } = await getPostsPathsByGlob(blogPostRoot, "**/*.md")
  const allPostMetadata = files
    .map(path => {
      const postData = fetchPostDataByPath<BlogPostMetadata>(blogPostRoot, path)
      return postData
    })
    .filter(item => item.published)
    .map(item => ({ ...item, postType: PostType.Post }))

  return allPostMetadata
}
