import React from "react"
import { formatPostDate } from "~/helpers/formatPostDate"
import { BlogPost } from "~/model/BlogPost"
import { ExternalLink } from "../common/ExternalLink"

const Item: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div key={post.id} className="pb-12">
    <div className="flex flex-row justify-between items-start">
      <ExternalLink href={post.path} label={post.title} />
      <p>{formatPostDate(post.date)}</p>
    </div>
    <p className="py-2">{post.description}</p>
  </div>
)

export const RecentPosts: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <Item post={post} key={index} />
    ))}
  </>
)
