/* eslint-disable react/no-danger */
import React from "react"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import { PostType } from "~/model/Posts"

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
    <PostLayout title={title} description={description} type={PostType.Snippet}>
      <div className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: postHtml }} />
      </div>
    </PostLayout>
  </>
)

export default SnippetTemplate
