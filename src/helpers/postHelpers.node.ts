import glob from "glob"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
/**
 * This file is marked as *.node.ts, this means that it will only work
 * with files marked *.server.*
 *
 * Please make sure to not import this into anything that is not
 * a *.server.* file.
 */

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

export function fetchPostDataByFile<T>(rawFile: string): T {
  const metadata = matter(rawFile)

  return metadata.data as T
}
