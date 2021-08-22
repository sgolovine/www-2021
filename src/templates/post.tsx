import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"

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
    }[]
  }
}

const PostTemplate: React.FC<Props> = ({ pageContext }) => {
  const { postBody, postMeta, otherPosts } = pageContext

  console.log("pageContext", otherPosts)

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
        extraContent={() => <h1>Foobar</h1>}
      >
        <div className="prose">
          <MDXRenderer>{postBody}</MDXRenderer>
        </div>
      </PostLayout>
    </>
  )
}

export default PostTemplate
