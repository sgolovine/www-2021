/**
 * At build time. This script will create a JSON
 * file at `/public/post-index.json` & `/public/snippet-index.json`.
 * These files will contain file paths, metadata and slugs for each
 * blog post and snippet.
 *
 * The intention here is to avoid repeat expensive lookup operations
 */
require("dotenv").config()
const path = require("path")
const fs = require("fs")
const axios = require("axios")
const logger = require("./helpers/log")

const devToUrl = "https://dev.to/api/articles?username=sgolovine"

const pub = path.resolve(process.cwd(), "public")

const remotePostsOutPath = path.resolve(pub, "remote-posts.json")

;(() => {
  logger.build("Fetching posts from dev.to")
  axios
    .get(devToUrl)
    .then(resp => {
      logger.success("Successfully fetched remote posts")
      const allRemotePosts = resp.data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.description,
        url: post.url,
        date: post.published_at,
      }))
      try {
        fs.writeFileSync(
          remotePostsOutPath,
          JSON.stringify({ posts: allRemotePosts }, null, 2)
        )
        logger.write(`Wrote remote posts to: ${remotePostsOutPath}`)
      } catch (e) {
        logger.error("Could not write remote posts")
        console.error(e)
        process.exit(1)
      }
    })
    .catch(err => {
      logger.error("Error fetching remote posts")
      console.error(err)
      process.exit(1)
    })
})()
