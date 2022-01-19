/* eslint-disable react/jsx-props-no-spreading */
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
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

  return (
    <>
      <PostSEO
        title={postMeta.title}
        description={postMeta.description}
        date={postMeta.date}
        path={postMeta.path}
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
