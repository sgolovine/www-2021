import fs from "fs"
import { glob } from "glob"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { BlogPostType, RawBlogPost } from "~/model/BlogPost"

const snippetsDirectory = path.join(process.cwd(), "public", "snippets")

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
