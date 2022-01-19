import React, { ReactNode } from "react"
import { OtherPosts } from "~/model/BlogPost"
import { PostFooter } from "./PostFooter"
import PostHeader from "./PostHeader"

interface Props {
  title: string
  backRoute: string
  description?: string
  showAuthor?: boolean
  date?: string
  children: ReactNode
  otherPosts?: OtherPosts[]
}

export const PostLayout: React.FC<Props> = ({
  title,
  description,
  date,
  children,
  backRoute,
  otherPosts,
}) => (
  <div className="max-w-2xl mx-auto px-2 md:px-0">
    <PostHeader
      title={title}
      description={description}
      backRoute={backRoute}
      date={date}
    />
    <div className="py-4">{children}</div>
    {otherPosts && otherPosts.length > 0 && (
      <>
        <hr className="my-2 py-2" />
        <div className="pb-4">
          <PostFooter otherPosts={otherPosts} />
        </div>
      </>
    )}
  </div>
)
