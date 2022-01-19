import React from "react"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Subheader } from "~/components/common/Typography"
import { OtherPosts } from "~/model/BlogPost"

interface Props {
  otherPosts: OtherPosts[]
}

export const PostFooter: React.FC<Props> = ({ otherPosts }) => (
  <div>
    <Subheader>More Posts</Subheader>
    <div className="flex flex-col">
      {otherPosts.map(post => (
        <ExternalLink
          lg
          label={post.title}
          href={post.link}
          external={post.postType === "remote"}
          containerClassnames="py-2"
        />
      ))}
    </div>
  </div>
)
