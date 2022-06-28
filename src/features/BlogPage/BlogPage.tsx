import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { ContentContainer } from "~/components/layout/ContentContainer"
import { PostItem } from "~/components/post/PostItem"
import { BlogPostMetadata, RemotePostMetadata } from "~/model/Posts"

interface Props {
  localPosts: BlogPostMetadata[]
  remotePosts: RemotePostMetadata[]
}

const BlogPage: React.FC<Props> = ({ localPosts, remotePosts }) => (
  <div>
    <Header title="Posts" additionalText="Read the latest posts from my blog" />
    <ContentContainer>
      {localPosts &&
        localPosts.length > 0 &&
        localPosts.map((post, index) => (
          <PostItem
            key={`${index}-${post.slug}`}
            path={post.slug}
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
        remotePosts.map((post, index) => (
          <PostItem
            key={`${index}-${post.id}`}
            path={post.url}
            title={post.title}
            date={post.date}
            description={post.description}
            external
          />
        ))}
    </ContentContainer>
  </div>
)

// ts-prune-ignore-next
export default withNewLayout(BlogPage)
