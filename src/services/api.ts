import fs from "fs"
import { glob } from "glob"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { BlogPostType, RawBlogPost } from "~/model/BlogPost"
import { sortDescendingByDate } from "~/helpers/sortRawPosts"

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

export const getPost = async (slug: string) => {
  const allPostMeta = getLocalPosts()
  const post = allPostMeta.filter(post => post.id === slug)[0]
  const { filePath } = post

  const postPath = path.join(postsDirectory, filePath)
  const postFile = fs.readFileSync(postPath, "utf-8")
  const { data: fm } = matter(postFile)
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
    mdx: await serialize(postFile),
  }
}
