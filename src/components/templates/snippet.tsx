/* eslint-disable react/no-danger */
import React from "react"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"

interface Props {
  title: string
  description: string
  path: string
  postHtml: string
}

const SnippetTemplate: React.FC<Props> = ({
  title,
  description,
  path,
  postHtml,
}) => (
  <>
    <PostSEO title={title} description={description} path={path} />
    <PostLayout title={title} description={description} type="snippet">
      <div className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: postHtml }} />
      </div>
    </PostLayout>
  </>
)

export default SnippetTemplate
