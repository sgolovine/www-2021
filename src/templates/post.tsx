import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostSEO } from "~/components/common/SEO"
import { withMainLayout } from "~/components/layout"

interface Props {
  pageContext: {
    postBody: string
    postMeta: {
      title: string
      description: string
      date: string
      path: string
    }
  }
}

const PostTemplate: React.FC<Props> = ({ pageContext }) => {
  const { postBody, postMeta } = pageContext

  const canonicalURL = `https://sunnygolovine.com${postMeta.path}`

  return (
    <>
      <PostSEO
        title={postMeta.title}
        description={postMeta.description}
        canonicalURL={canonicalURL}
        date={postMeta.date}
      />
      <div>
        <div className="pb-5 text-center">
          <h1 className="text-2xl font-bold pb-2">{postMeta.title}</h1>
          <p className="text-sm text-gray-300 pb-2">{postMeta.date}</p>
        </div>
        <div className="prose">
          <MDXRenderer>{postBody}</MDXRenderer>
        </div>
      </div>
    </>
  )
}

export default withMainLayout(PostTemplate)
