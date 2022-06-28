import { snippetRoot, blogPostRoot } from "~/defines/paths.node"
import { SnippetsMetadata, PostType } from "~/model/Posts"
import { fetchPostDataByPath } from "./fetchPostData.node"
import { getPostsPathsByGlob } from "./getPostPathsByGlob.node"

/**
 * @returns Promise with an array of snippets post metadata.
 */
export async function fetchSnippetsList(): Promise<SnippetsMetadata[]> {
  const { files } = await getPostsPathsByGlob(snippetRoot, "*.md")
  const allPostMetadata = files
    .map(path => {
      const postData = fetchPostDataByPath<SnippetsMetadata>(blogPostRoot, path)
      return postData
    })
    .map(item => ({ ...item, postType: PostType.Snippet }))

  return allPostMetadata
}
