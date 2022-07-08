import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/__legacy__/withLayout"
import { ContentContainer } from "~/components/layout/page/ContentContainer"
import { PostItem } from "~/components/post/PostItem"
import { BlogPost } from "~/model/BlogPost"

interface Props {
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
}

const BlogPage: React.FC<Props> = ({ localPosts, remotePosts }) => (
  <div>
    <Header title="Posts" additionalText="Read the latest posts from my blog" />
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
    <Header
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

// ts-prune-ignore-next
export default withNewLayout(BlogPage)
