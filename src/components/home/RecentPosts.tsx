import React from "react"
import { BlogPost } from "~/model/BlogPost"
import { ExternalLink } from "../common/ExternalLink"

const Item: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div key={post.id} className="pb-12">
      <div className="flex flex-row justify-between items-start">
        <ExternalLink href={post.path} label={post.title} />
        <p>{post.date.toLocaleDateString()}</p>
      </div>
      <p className="py-2">{post.description}</p>
    </div>
  )
}

export const RecentPosts: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <Item post={post} key={index} />
      })}
    </>
  )
}
