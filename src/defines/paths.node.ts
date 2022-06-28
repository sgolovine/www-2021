// Node paths for server rendering
import path from "path"

const publicPath = path.resolve(process.cwd(), "public")

// Local Posts Map
export const localPostsMapPath = path.resolve(process.cwd(), "post-map.json")

// Remote Posts Map
export const remotePostsMapPath = path.resolve(
  process.cwd(),
  "remote-posts.json"
)

// CMS Root Path
export const cmsDataRoot = path.resolve(publicPath, "cms")

// Blog Posts Root
export const blogPostRoot = path.resolve(publicPath, "posts")

// Snippets Root
export const snippetRoot = path.resolve(publicPath, "snippets")
