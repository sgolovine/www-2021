import { Link } from "gatsby"
import React from "react"
import { Header } from "~/components/Typography"
import useBlogPosts from "~/hooks/useBlogPosts"

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
  const { allPosts, recentPosts } = useBlogPosts()

  console.log(allPosts, recentPosts)

  return (
    <div>
      <div className="mb-4">
        <Header>Posts</Header>
        <p>Read the latest posts from my personal blog</p>
      </div>
      <div className="py-6">
        {allPosts &&
          allPosts.length > 0 &&
          allPosts.map(post => {
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
