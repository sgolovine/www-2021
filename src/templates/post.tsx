/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import PrismProvider from "~/components/PrismProvider"

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
        otherPosts={otherPosts}
      >
        <div className="prose">
          <PrismProvider>
            <MDXRenderer>{postBody}</MDXRenderer>
          </PrismProvider>
        </div>
      </PostLayout>
    </>
  )
}

export default PostTemplate
