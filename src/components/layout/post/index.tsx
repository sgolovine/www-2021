import React, { ReactNode, useState } from "react"
import { PostType, RawBlogPost } from "~/model/BlogPost"
import { SiteHeader } from "../page"
import { PostFooter } from "./PostFooter"
import PostHeader from "./PostHeader"

interface Props {
  title: string
  type: PostType
  description?: string
  showAuthor?: boolean
  date?: string
  children: ReactNode
  otherPosts?: RawBlogPost[]
}

export const PostLayout: React.FC<Props> = ({
  title,
  type,
  description,
  date,
  children,
  otherPosts,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <>
      <SiteHeader menuOpen={mobileMenuOpen} setMenuOpen={setMobileMenuOpen} />
      <div className="max-w-2xl mx-auto px-2 md:px-0">
        <PostHeader
          type={type}
          title={title}
          description={description}
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
    </>
  )
}
