import React from "react"
import { PrismProvider } from "~/components/codeblocks"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"

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
  const { meta } = pageContext

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
          <p>Post Body</p>
          {/* <PrismProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </PrismProvider> */}
        </div>
      </PostLayout>
    </>
  )
}

export default SnippetTemplate
