import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import PrismProvider from "~/components/PrismProvider"

interface Props {
  pageContext: {
    body: string
    meta: {
      title: string
      path: string
      description: string
    }
  }
}

const SnippetTemplate: React.FC<Props> = ({ pageContext }) => {
  const { body, meta } = pageContext

  return (
    <>
      <PostSEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
      />
      <PostLayout
        title={meta.title}
        description={meta.description}
        type="snippet"
      >
        <div className="prose mx-auto">
          <PrismProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </PrismProvider>
        </div>
      </PostLayout>
    </>
  )
}

export default SnippetTemplate
