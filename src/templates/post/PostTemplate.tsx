/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/components/layout"
import { ExternalLink } from "~/components/common/ExternalLink"
import { Subheader } from "~/components/common/Typography"
import CodeBlock from "./CodeBlock"

interface Props {
  pageContext: {
    postBody: string
    postMeta: {
      title: string
      description: string
      date: string
      path: string
    }
    otherPosts: {
      id: string
      title: string
      link: string
      date: string
      postType: "local" | "remote"
    }[]
  }
}

function preToCodeBlock(preProps: any) {
  if (preProps?.children?.props?.mdxType === "code") {
    const { children: codeString, className = "" } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      language: match != null ? match[1] : "",
    }
  }
  return undefined
}

// Code Syntax Highlighting
const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return (
        <CodeBlock codeString={props.codeString} language={props.language} />
      )
    }
    return <pre {...preProps} />
  },
}

const PostTemplate: React.FC<Props> = ({ pageContext }) => {
  const { postBody, postMeta, otherPosts } = pageContext

  const canonicalURL = `https://sunnygolovine.com${postMeta.path}`

  const renderExtraContent = () => (
    <div>
      <Subheader>More Posts</Subheader>
      <div className="flex flex-col">
        {otherPosts.map(post => (
          <ExternalLink
            lg
            label={post.title}
            href={post.link}
            external={post.postType === "remote"}
            containerClassnames="py-2"
          />
        ))}
      </div>
    </div>
  )

  return (
    <>
      <PostSEO
        title={postMeta.title}
        description={postMeta.description}
        canonicalURL={canonicalURL}
        date={postMeta.date}
      />
      <PostLayout
        showAuthor
        title={postMeta.title}
        description={postMeta.description}
        date={postMeta.date}
        backRoute="/blog"
        extraContent={renderExtraContent}
      >
        <div className="prose">
          <MDXProvider components={components}>
            <MDXRenderer>{postBody}</MDXRenderer>
          </MDXProvider>
        </div>
      </PostLayout>
    </>
  )
}

export default PostTemplate
