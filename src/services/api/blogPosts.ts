import glob from "glob"
import matter from "gray-matter"
import path from "path"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import { sortDescendingByDate } from "~/helpers/sortRawPosts"
import { RawBlogPost, BlogPostType } from "~/model/BlogPost"
import { mdxSerializeOptions } from "./constants"

const postsDirectory = path.join(process.cwd(), "public", "posts")

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

export const getRemotePosts = () => {
  const mapPath = path.join(process.cwd(), "public", "remote-posts.json")
  const mapFile = fs.readFileSync(mapPath, "utf-8")
  const { posts } = JSON.parse(mapFile)
  const formattedPosts: RawBlogPost[] = posts
    .map(
      (post: {
        id: number
        title: string
        description: string
        url: string
        date: string
      }) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        path: post.url,
        type: BlogPostType.Remote,
        rawDate: post.date,
        published: true,
      })
    )
    .sort(sortDescendingByDate)

  return formattedPosts
}

export const getPost = async (slug: string) => {
  const allPostMeta = getLocalPosts()
  const post = allPostMeta.filter(post => post.id === slug)[0]
  const { filePath } = post

  const postPath = path.join(postsDirectory, filePath)
  const postFile = fs.readFileSync(postPath, "utf-8")
  const { compiledSource, frontmatter } = await serialize(
    postFile,
    mdxSerializeOptions
  )

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

export const getRecentPosts = (filterOutSlug?: string) => {
  const localPosts = getLocalPosts()
  const remotePosts = getRemotePosts()
  const allPosts = [...localPosts, ...remotePosts]
    .sort(sortDescendingByDate)
    .slice(0, 5)

  if (filterOutSlug) {
    return allPosts.filter(post => post.id !== filterOutSlug)
  }
  return allPosts
}
