/**
 * This script will fetch remote blog posts from dev.to
 */
require("dotenv").config()
const axios = require("axios")
const fs = require("fs")
const path = require("path")

const username = "sgolovine"

const outputPath = path.resolve(process.cwd(), "remote-posts.json")

function formatPost(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    url: post.url,
    date: post.published_at,
  }
}

;(() => {
  const url = `https://dev.to/api/articles?username=${username}`

  console.log("🚚 Fetching Posts from Dev.to")

  axios
    .get(url)
    .then(resp => {
      const allRemotePosts = resp.data.map(post => formatPost(post))
      fs.writeFileSync(
        outputPath,
        JSON.stringify({ posts: allRemotePosts }, null, 2)
      )
      console.log("✅ Fetched and wrote posts successfully!")
      console.log("📋 Written to: ", outputPath)
      process.exit(0)
    })
    .catch(err => {
      console.error("❌ There was an error fetching remote posts")
      console.error(err)
      process.exit(1)
    })
})()
