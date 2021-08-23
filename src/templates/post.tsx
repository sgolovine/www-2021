import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Subheader } from "~/components/common/Typography"

interface Props {
  pageContext: {
    postBody: string
    postMeta: {
      title: string
      description: string
      date: string
      path: string
    }
    otherPosts: {
      id: string
      title: string
      link: string
      date: string
      postType: "local" | "remote"
    }[]
  }
}

const PostTemplate: React.FC<Props> = ({ pageContext }) => {
  const { postBody, postMeta, otherPosts } = pageContext

  const canonicalURL = `https://sunnygolovine.com${postMeta.path}`

  const renderExtraContent = () => (
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

  return (
    <>
      <PostSEO
        title={postMeta.title}
        description={postMeta.description}
        canonicalURL={canonicalURL}
        date={postMeta.date}
      />
      <PostLayout
        showAuthor
        title={postMeta.title}
        description={postMeta.description}
        date={postMeta.date}
        backRoute="/blog"
        extraContent={renderExtraContent}
      >
        <div className="prose">
          <MDXRenderer>{postBody}</MDXRenderer>
        </div>
      </PostLayout>
    </>
  )
}

export default PostTemplate
