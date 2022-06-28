/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import { OtherPosts, PostType } from "~/model/Posts"

interface Props {
  title: string
  description: string
  date: string
  path: string
  postHtml: string
  otherPosts: OtherPosts
}

const PostTemplate = ({
  title,
  description,
  date,
  path,
  otherPosts,
  postHtml,
}: Props) => (
  <>
    <PostSEO title={title} description={description} date={date} path={path} />
    <PostLayout
      showAuthor
      title={title}
      description={description}
      date={date}
      otherPosts={otherPosts}
      type={PostType.Post}
    >
      <div className="prose">
        {/* <PrismProvider> */}
        <div dangerouslySetInnerHTML={{ __html: postHtml }} />
        {/* </PrismProvider> */}
      </div>
    </PostLayout>
  </>
)

export default PostTemplate
