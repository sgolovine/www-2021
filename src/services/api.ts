import fs from "fs"
import { glob } from "glob"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { BlogPostType, RawBlogPost } from "~/model/BlogPost"
import { sortDescendingByDate } from "~/helpers/sortRawPosts"

type RemotePost = {
  id: number
  title: string
  description: string
  url: string
  date: string
}

const postsDirectory = path.join(process.cwd(), "public", "posts")
const snippetsDirectory = path.join(process.cwd(), "public", "snippets")

export const getLocalPosts = () => {
  const files = glob.sync("**/*.md", { cwd: postsDirectory })
  const postMeta = files
    .map(file => {
      const postPath = path.join(postsDirectory, file)
      const postFile = fs.readFileSync(postPath, "utf-8")
      const postData = matter(postFile)
      const fm = postData.data
      const blogPost: RawBlogPost = {
        id: fm.slug,
        title: fm.title,
        description: fm.description,
        path: `/post/${fm.slug}`,
        type: BlogPostType.Local,
        rawDate: fm.date,
        published: fm.published,
        filePath: file,
      }
      return blogPost
    })
    .filter(post => post.published)
    .sort(sortDescendingByDate)

  return postMeta
}

export const getSnippets = () => {
  const files = glob.sync("*.md", { cwd: snippetsDirectory })
  const snippetsMeta = files
    .map(file => {
      const snippetsPath = path.join(snippetsDirectory, file)
      const snippetsFile = fs.readFileSync(snippetsPath, "utf-8")
      const snippetsData = matter(snippetsFile)
      const fm = snippetsData.data
      const snippet: RawBlogPost = {
        id: fm.slug,
        title: fm.title,
        description: fm.description,
        path: `/snippet/${fm.slug}`,
        type: BlogPostType.Local,
        published: fm.published,
        filePath: file,
      }
      return snippet
    })
    .filter(item => item.published)

  return snippetsMeta
}

export const getRemotePosts = () => {
  const mapPath = path.join(process.cwd(), "public", "remote-posts.json")
  const mapFile = fs.readFileSync(mapPath, "utf-8")
  const { posts } = JSON.parse(mapFile)
  const formattedPosts: RawBlogPost[] = posts
    .map((post: RemotePost) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      path: post.url,
      type: BlogPostType.Remote,
      rawDate: post.date,
      published: true,
    }))
    .sort(sortDescendingByDate)

  return formattedPosts
}

export const getSnippet = async (slug: string) => {
  const allSnippetsMeta = getSnippets()
  const snippet = allSnippetsMeta.filter(snippet => snippet.id === slug)[0]
  const { filePath } = snippet

  const snippetPath = path.join(snippetsDirectory, filePath)
  const snippetFile = fs.readFileSync(snippetPath, "utf-8")
  const { compiledSource, frontmatter } = await serialize(snippetFile, {
    parseFrontmatter: true,
  })

  const fm = frontmatter as any

  const snippetMetadata: RawBlogPost = {
    id: fm.slug,
    title: fm.title,
    description: fm.description,
    path: `/snippet/${fm.slug}`,
    type: BlogPostType.Local,
    published: fm.published,
    filePath,
  }

  return {
    mdx: compiledSource,
    meta: snippetMetadata,
  }
}

export const getPost = async (slug: string) => {
  const allPostMeta = getLocalPosts()
  const post = allPostMeta.filter(post => post.id === slug)[0]
  const { filePath } = post

  const postPath = path.join(postsDirectory, filePath)
  const postFile = fs.readFileSync(postPath, "utf-8")
  const { compiledSource, frontmatter } = await serialize(postFile, {
    parseFrontmatter: true,
  })

  const fm = frontmatter as any

  const postMetadata: RawBlogPost = {
    id: fm.slug,
    title: fm.title,
    description: fm.description,
    path: `/post/${fm.slug}`,
    type: BlogPostType.Local,
    rawDate: fm.date,
    published: fm.published,
    filePath,
  }

  return {
    meta: postMetadata,
    mdx: compiledSource,
  }
}
