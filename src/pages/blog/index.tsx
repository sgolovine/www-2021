import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

type RawData = {
  node: {
    id: string
    frontmatter: {
      title: string
      date: string
      description: string
      slug: string
    }
  }
}

type NormalizedData = {
  id: string
  title: string
  date: Date
  description: string
  path: string
}

const date = new Date()

const BlogPage = () => {
  const [posts, setPosts] = useState<NormalizedData[]>([])

  const postQuery = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              slug
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    setPosts(
      postQuery.allMdx.edges
        .map((item: RawData) => {
          const { node } = item
          return {
            id: node.id,
            title: node.frontmatter.title,
            date: new Date(node.frontmatter.date),
            description: node.frontmatter.description,
            path: `/blog/post/${node.frontmatter.slug}`,
          }
        })
        .sort((a: NormalizedData, b: NormalizedData) => {
          return b.date.getTime() - a.date.getTime()
        })
    )
  }, [postQuery])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <div>
      <div className="mb-4">
        <h1 className="page-header">Posts</h1>
        <p>Read the latest posts from my personal blog</p>
      </div>
      <div className="py-6">
        {posts &&
          posts.length > 0 &&
          posts.map(post => {
            return (
              <div key={post.id} className="pb-12">
                <div className="flex flex-row justify-between items-start">
                  <Link
                    className="text-lg text-brand-yellow font-bold"
                    to={post.path}
                  >
                    {post.title}
                  </Link>
                  <p>{post.date.toLocaleDateString()}</p>
                </div>
                <p className="py-2">{post.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BlogPage
