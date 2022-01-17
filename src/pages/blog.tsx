import React from "react"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Header, Subheader } from "~/components/common/Typography"
import { formatPostDate } from "~/helpers/formatPostDate"
import useBlogPosts from "~/hooks/useBlogPosts"
import { useData } from "~/hooks/useData"
import { withMainLayout } from "~/components/layout"

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
          <div key={post.id} className="pb-12">
            <div className="flex flex-row justify-between items-start">
              <ExternalLink lg href={post.path} label={post.title} />
              <p>{formatPostDate(post.date)}</p>
            </div>
            <p className="py-2">{post.description}</p>
          </div>
        ))}
    </div>
  )

  const renderRemotePosts = () => (
    <div className="py-6">
      {remotePosts &&
        remotePosts.length > 0 &&
        remotePosts.map(post => (
          <div key={post.id} className="pb-12">
            <div className="flex flex-row justify-between items-start">
              <ExternalLink
                lg
                noIcon
                external
                href={post.path}
                label={post.title}
              />
              <p>{formatPostDate(post.date)}</p>
            </div>
            <p className="py-2">{post.description}</p>
          </div>
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
