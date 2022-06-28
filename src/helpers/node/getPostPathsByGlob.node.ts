import glob from "glob"

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
