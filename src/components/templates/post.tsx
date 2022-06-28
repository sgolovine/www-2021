/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"

interface Props {
  title: string
  description: string
  date: string
  path: string
  postHtml: string
  otherPosts: {
    id: string
    title: string
    link: string
    date: string
    postType: "local" | "remote"
  }[]
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
      type="post"
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
