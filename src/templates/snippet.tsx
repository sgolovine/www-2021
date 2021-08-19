import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { withSnippetLayout } from "~/components/layout"
import { ArrowLeft } from "~/icons/ArrowLeft"

interface Props {
  pageContext: {
    body: string
    meta: {
      title: string
      path: string
    }
  }
}

const SnippetTemplate: React.FC<Props> = ({ pageContext }) => {
  const { body, meta } = pageContext

  return (
    <>
      <div className="pt-4 pb-6">
        <Link className="flex flex-row items-center" to="/snippets">
          <ArrowLeft />
          <p className="text-lg font-bold text-brand-link hover:text-brand-yellow">
            BACK
          </p>
        </Link>
      </div>
      <div className="text-center pb-12">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
      </div>
      <div className="prose mx-auto">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </>
  )
}

export default withSnippetLayout(SnippetTemplate)
