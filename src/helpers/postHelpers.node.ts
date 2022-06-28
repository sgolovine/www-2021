/**
 * This file is marked as *.node.ts, this means that it will only work
 * with files marked *.server.*
 *
 * Please make sure to not import this into anything that is not
 * a *.server.* file.
 */

import glob from "glob"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { blogPostRoot, snippetRoot } from "~/defines/paths.node"
import { BlogPostMetadata, PostType, SnippetsMetadata } from "~/model/Posts"

/**
 * @param basePath path to where to start search
 * @param pattern pattern for glob
 * @returns Array of filepaths to files matching the glob from the basePath
 * that is in order to make those paths "whole", you must combine each one
 * with the basePath. This is done to add flexibility.
 */
export async function getPostsPathsByGlob(
  basePath: string,
  pattern: string
): Promise<{ files: string[] }> {
  return new Promise((resolve, reject) => {
    glob(pattern, { cwd: basePath }, (error, files) => {
      if (error) {
        reject(error)
      }
      resolve({
        files,
      })
    })
  })
}

/**
 *
 * @param postRelativePath return of fetchPostFromGlob item
 * @returns metadata on each post. See PostData type
 */
export function fetchPostData<T>(
  postBasePath: string,
  postRelativePath: string
): T {
  const postFullPath = path.resolve(postBasePath, postRelativePath)
  const rawFile = fs.readFileSync(postFullPath, "utf-8")
  const metadata = matter(rawFile)

  return metadata.data as T
}

/**
 *
 * @param rawFile file that has been read by fs.readFile(...)
 * @returns metadata for the post.
 */
export function fetchPostDataByFile<T>(rawFile: string): T {
  const metadata = matter(rawFile)

  return metadata.data as T
}

/**
 *
 * @returns Promise with an array of blog post metadata
 */
export async function fetchBlogPostList(): Promise<BlogPostMetadata[]> {
  const { files } = await getPostsPathsByGlob(blogPostRoot, "**/*.md")
  const allPostMetadata = files
    .map(path => {
      const postData = fetchPostData<BlogPostMetadata>(blogPostRoot, path)
      return postData
    })
    .filter(item => item.published)
    .map(item => ({ ...item, postType: PostType.Post }))

  return allPostMetadata
}

/**
 * @returns Promise with an array of snippets post metadata.
 */
export async function fetchSnippetsList(): Promise<SnippetsMetadata[]> {
  const { files } = await getPostsPathsByGlob(snippetRoot, "*.md")
  const allPostMetadata = files
    .map(path => {
      const postData = fetchPostData<SnippetsMetadata>(blogPostRoot, path)
      return postData
    })
    .map(item => ({ ...item, postType: PostType.Snippet }))

  return allPostMetadata
}
