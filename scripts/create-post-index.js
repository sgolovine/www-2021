/**
 * At build time. This script will create a JSON
 * file at `/public/post-index.json` & `/public/snippet-index.json`.
 * These files will contain file paths, metadata and slugs for each
 * blog post and snippet.
 *
 * The intention here is to avoid repeat expensive lookup operations
 */
require("dotenv").config()
const matter = require("gray-matter")
const glob = require("glob")
const path = require("path")
const fs = require("fs")
const axios = require("axios")
const logger = require("./helpers/log")

const devToUrl = "https://dev.to/api/articles?username=sgolovine"

const pub = path.resolve(process.cwd(), "public")

const blogPostsPath = path.resolve(pub, "posts")
const snippetsPath = path.resolve(pub, "snippets")

const remotePostsOutPath = path.resolve(pub, "remote-posts.json")
const blogPostOutPath = path.resolve(pub, "blog-posts.json")
const snippetsOutPath = path.resolve(pub, "snippets.json")

function fetchPosts() {
  logger.build("Fetching blog posts")
  glob("**/*.md", { cwd: blogPostsPath }, (err, files) => {
    if (err) {
      logger.error(`Could not read files: ${err}`)
    }
    logger.build("Compiling post index")
    const postMeta = files.map(file => {
      const postPath = path.resolve(blogPostsPath, file)
      const postRaw = fs.readFileSync(postPath, "utf-8")
      const { data } = matter(postRaw)
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        slug: data.slug,
        published: data.published,
        fullPath: postPath,
      }
    })
    logger.write(`Writing file to ${blogPostOutPath}`)
    try {
      fs.writeFileSync(blogPostOutPath, JSON.stringify(postMeta, null, 2))
      logger.success("Successfully generated blog post index")
    } catch (e) {
      logger.error("Could not write file")
      console.error(e)
      process.exit(1)
    }
  })
}

function fetchRemotePosts() {
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
}

function fetchSnippets() {
  logger.build("Fetching snippets")
  glob("*.md", { cwd: snippetsPath }, (err, files) => {
    if (err) {
      logger.error(`Could not read files: ${err}`)
    }
    logger.build("Compiling snippets index")
    const snippetsMeta = files.map(file => {
      const fullPath = path.resolve(snippetsPath, file)
      const snippetRaw = fs.readFileSync(fullPath, "utf-8")
      const { data } = matter(snippetRaw)
      return {
        title: data.title,
        description: data.description,
        slug: data.slug,
        tags: data.tags,
        published: data.published,
        fullPath,
      }
    })
    logger.write(`Writing file to ${snippetsOutPath}`)
    try {
      fs.writeFileSync(snippetsOutPath, JSON.stringify(snippetsMeta, null, 2))
      logger.success("Successfully generated snippets index")
    } catch (e) {
      logger.error("Could not write file")
      console.error(e)
      process.exit(1)
    }
  })
}

;(() => {
  fetchPosts()
  fetchSnippets()
  fetchRemotePosts()
})()
