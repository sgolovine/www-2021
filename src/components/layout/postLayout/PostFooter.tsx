import React from "react"
import { Subheader } from "~/components/common/Typography"
import { PostItem } from "~/components/post/PostItem"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { BlogPostType, RawBlogPost } from "~/model/BlogPost"

interface Props {
  otherPosts: RawBlogPost[]
}

export const PostFooter: React.FC<Props> = ({ otherPosts }) => {
  const posts = convertBlogPosts(otherPosts)
  return (
    <div>
      <Subheader>More Posts</Subheader>
      <div className="flex flex-col">
        {posts.map(post => (
          <PostItem
            key={post.id}
            path={post.path}
            title={post.title}
            date={post.date}
            description={post.description}
            external={post.type === BlogPostType.Remote}
          />
        ))}
      </div>
    </div>
  )
}
