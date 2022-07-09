import React from "react"
import { PostItem } from "~/components/post/PostItem"
import { BlogPost } from "~/model/BlogPost"
import { PageHeader, ContentContainer } from "~/components/layout"

interface Props {
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
}

const BlogPage: React.FC<Props> = ({ localPosts, remotePosts }) => (
  <div>
    <PageHeader
      title="Posts"
      additionalText="Read the latest posts from my blog"
    />
    <ContentContainer>
      {localPosts &&
        localPosts.length > 0 &&
        localPosts.map(post => (
          <PostItem
            key={post.id}
            path={post.path}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        ))}
    </ContentContainer>
    <hr className="py-4" />
    <PageHeader
      title="The Practical Dev"
      additionalText="Read my latest posts from dev.to"
    />
    <ContentContainer>
      {remotePosts &&
        remotePosts.length > 0 &&
        remotePosts.map(post => (
          <PostItem
            key={post.id}
            path={post.path}
            title={post.title}
            date={post.date}
            description={post.description}
            external
          />
        ))}
    </ContentContainer>
  </div>
)

export default BlogPage
