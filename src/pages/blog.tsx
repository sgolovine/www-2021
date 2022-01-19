import React from "react"
import { Header, Subheader } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { PostItem } from "~/components/post/PostItem"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"

const BlogPage = () => {
  const { localPosts, remotePosts } = useBlogPosts()

  const {
    siteData: { dev_to },
  } = useData()

  const renderLocalPosts = () => (
    <div className="py-6">
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
    </div>
  )

  const renderRemotePosts = () => (
    <div className="py-6">
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
    </div>
  )

  return (
    <div>
      <div className="mb-4">
        <Header>Posts</Header>
        <p>Read the latest posts from my personal blog</p>
      </div>
      {renderLocalPosts()}
      <div className="mb-4">
        <Subheader>The Practical Dev</Subheader>
        <p>
          Read my latest posts on <a href={dev_to}>Dev.to</a>
        </p>
      </div>
      {renderRemotePosts()}
    </div>
  )
}

// ts-prune-ignore-next
export default withMainLayout(BlogPage)
