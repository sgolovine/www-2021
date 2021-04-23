import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useEffect } from "react"

interface Props {
  pageContext: {
    postBody: string
    postMeta: {
      date: string
      description: string
      title: string
    }
  }
}

const PostTemplate: React.FC<Props> = ({ pageContext }) => {
  const { postBody, postMeta } = pageContext

  return (
    <div>
      <div className="pb-5 text-center">
        <h1 className="text-2xl font-bold pb-2">{postMeta.title}</h1>
        <p className="text-sm text-gray-300 pb-2">{postMeta.date}</p>
        {/* <p className="text-lg">{postMeta.description}</p> */}
      </div>
      <div className="prose">
        <MDXRenderer>{postBody}</MDXRenderer>
      </div>
    </div>
  )
}

export default PostTemplate
