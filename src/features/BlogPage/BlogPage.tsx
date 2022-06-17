import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { ContentContainer } from "~/components/layout/ContentContainer"
import { PostItem } from "~/components/post/PostItem"
import useBlogPosts from "~/hooks/useBlogPosts"

const BlogPage: React.FC = () => {
  const { localPosts, remotePosts } = useBlogPosts()

  return (
    <div>
      <Header
        title="Posts"
        additionalText="Read the latest posts from my blog"
      />
      <ContentContainer>
        {localPosts &&
          localPosts.length > 0 &&
          localPosts.map(post => (
            <PostItem
              path={post.path}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
      </ContentContainer>
      <hr className="py-4" />
      <Header
        title="The Practical Dev"
        additionalText="Read my latest posts from dev.to"
      />
      <ContentContainer>
        {remotePosts &&
          remotePosts.length > 0 &&
          remotePosts.map(post => (
            <PostItem
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
}

// ts-prune-ignore-next
export default withNewLayout(BlogPage)
