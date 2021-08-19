import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface Props {
  pageContext: {
    body: string
    meta: {
      title: string
      description: string
      path: string
    }
  }
}

const SnippetTemplate: React.FC<Props> = ({ pageContext }) => {
  const { body, meta } = pageContext

  return (
    <>
      <div>
        <div>
          <h1>{meta.title}</h1>
        </div>
        <div className="prose">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </>
  )
}

export default SnippetTemplate
