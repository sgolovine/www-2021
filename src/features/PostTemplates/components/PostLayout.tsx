import React, { ReactNode, useState } from "react"
import { PostType, RawBlogPost } from "~/model/BlogPost"
import { SiteHeader } from "~/components/layout"
import { PostFooter } from "./PostFooter"
import PostHeader from "./PostHeader"
import { GlobalStyle } from "~/styles/GlobalStyle"
import { PrismNordTheme } from "../styles/PrismNordTheme"
import { CopyrightText } from "~/components/common/CopyrightText"

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
      <GlobalStyle />
      <PrismNordTheme />
      <div className="flex flex-col min-h-screen min-w-screen">
        <SiteHeader
          pageTitle={type === PostType.Post ? "Post" : "Snippet"}
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        <div className="max-w-2xl mx-auto px-2 md:px-0 flex-grow">
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
        <CopyrightText />
      </div>
    </>
  )
}
