/**
 * This script maps post slugs to their filenames
 * It runs prior to running `dev` or `build` and
 * generates a file in `<<project-root>>/post-map.json`
 */
const path = require("path")
const fs = require("fs")
const glob = require("glob")
const matter = require("gray-matter")

const blogPostBasePath = path.resolve(process.cwd(), "public", "posts")
const snippetsBasePath = path.resolve(process.cwd(), "public", "snippets")
const outputFileLocation = path.resolve(process.cwd(), "post-map.json")

async function fetchByGlob(cwd, pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, { cwd }, (error, files) => {
      if (error) {
        reject(error)
      }

      resolve(files)
    })
  })
}

async function main() {
  console.log("🚚 Creating blog post map")

  try {
    const blogPostFilePaths = await fetchByGlob(blogPostBasePath, "**/*.md")
    const snippetsFilePaths = await fetchByGlob(snippetsBasePath, "*.md")

    const blogPostMap = blogPostFilePaths.map(filePath => {
      const fullPath = path.resolve(blogPostBasePath, filePath)
      const rawFile = fs.readFileSync(fullPath, "utf-8")
      const meta = matter(rawFile)
      const slug = meta?.data?.slug

      return {
        filePath,
        slug,
      }
    })
    const snippetsMap = snippetsFilePaths.map(filePath => {
      const fullPath = path.resolve(snippetsBasePath, filePath)
      const rawFile = fs.readFileSync(fullPath, "utf-8")
      const meta = matter(rawFile)
      const slug = meta?.data?.slug

      return {
        filePath,
        slug,
      }
    })

    const data = {
      postBasePath: blogPostBasePath,
      snippetsBasePath,
      posts: blogPostMap,
      snippets: snippetsMap,
    }
    try {
      fs.writeFileSync(outputFileLocation, JSON.stringify(data, null, 2))
      console.log("📋 Wrote post map: ", outputFileLocation)
    } catch (err) {
      console.error("❌ Error writing post map")
      console.error(err)
      process.exit(1)
    }
  } catch (err) {
    console.error("❌ Error generating post map")
    console.error(err)
    process.exit(1)
  }
}

main()
