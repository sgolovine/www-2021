/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { CodeBlock } from "./CodeBlock"
import { preToCodeBlock } from "./helpers"

const Pre = (preProps: any) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <CodeBlock codeString={props.codeString} language={props.language} />
  }
  return <pre {...preProps} />
}

export const PrismProvider: React.FC = ({ children }) => (
  <MDXProvider components={{ pre: Pre }}>{children}</MDXProvider>
)
