import { Link } from "gatsby"
import React from "react"
import { BlogPost } from "~/model/BlogPost"

interface Props {
  post: BlogPost
}

const BlogPostItem: React.FC<Props> = ({ post }) => {
  return (
    <div key={post.id} className="pb-12">
      <div className="flex flex-row justify-between items-start">
        <Link className="text-lg text-brand-yellow font-bold" to={post.path}>
          {post.title}
        </Link>
        <p>{post.date.toLocaleDateString()}</p>
      </div>
      <p className="py-2">{post.description}</p>
    </div>
  )
}

export default BlogPostItem
