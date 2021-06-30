import React from "react"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Header } from "~/components/common/Typography"
import useBlogPosts from "~/hooks/useBlogPosts"

const BlogPage = () => {
  const { allPosts } = useBlogPosts()

  return (
    <div>
      <div className="mb-4">
        <Header>Posts</Header>
        <p>Read the latest posts from my personal blog</p>
      </div>
      <div className="py-6">
        {allPosts &&
          allPosts.length > 0 &&
          allPosts.map(post => (
              <div key={post.id} className="pb-12">
                <div className="flex flex-row justify-between items-start">
                  <ExternalLink lg href={post.path} label={post.title} />
                  <p>{post.date.toLocaleDateString()}</p>
                </div>
                <p className="py-2">{post.description}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default BlogPage
