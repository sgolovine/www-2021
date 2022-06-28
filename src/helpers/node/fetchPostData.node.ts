import matter from "gray-matter"
import path from "path"
import fs from "fs"

/**
 *
 * @param postRelativePath return of fetchPostFromGlob item
 * @returns metadata on each post. See PostData type
 */
export function fetchPostDataByPath<T>(
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
