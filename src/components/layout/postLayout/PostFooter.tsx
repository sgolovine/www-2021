import React from "react"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Subheader } from "~/components/common/Typography"
import {
  RemotePostMetadata,
  BlogPostMetadata,
  PostType,
  OtherPosts,
} from "~/model/Posts"

interface Props {
  otherPosts: OtherPosts
}

export const PostFooter: React.FC<Props> = ({ otherPosts }) => (
  <div>
    <Subheader>More Posts</Subheader>
    <div className="flex flex-col">
      {otherPosts.map((post, index) => {
        const key = `more-posts--post-${index}`
        const isRemotePost = post.postType === PostType.RemotePost
        if (isRemotePost) {
          const coercedPost = post as RemotePostMetadata
          return (
            <ExternalLink
              key={key}
              lg
              external
              label={coercedPost.title}
              href={coercedPost.url}
              containerClassnames="py-2"
            />
          )
        }
        const coercedPost = post as BlogPostMetadata
        return (
          <ExternalLink
            key={key}
            lg
            label={coercedPost.title}
            href={coercedPost.slug}
            containerClassnames="py-2"
          />
        )
      })}
    </div>
  </div>
)
