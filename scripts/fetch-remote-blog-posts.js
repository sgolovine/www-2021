/**
 * This script will fetch remote blog posts from dev.to
 * And then put them inside a JSON file in /static/posts/remotePosts.json
 */
require("dotenv").config()
const axios = require("axios")
const fs = require("fs")
const path = require("path")

const outputPath = path.resolve(
  __dirname,
  "..",
  "static",
  "posts",
  "remotePosts.json"
)

function createUrl(username) {
  return `https://dev.to/api/articles?username=${username}`
}

function formatPost(post) {
  return {
    id: post.id,
    title: post.title,
    url: post.url,
    date: post.published_at,
  }
}

;(() => {
  if (!process.env.DEV_USERNAME) {
    console.error(
      "Dev username not found. Please set DEV_USERNAME in your .env"
    )
    process.exit(1)
  }
  const url = createUrl(process.env.DEV_USERNAME)

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
