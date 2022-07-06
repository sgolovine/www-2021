/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { CodeBlock } from "./CodeBlock"
import { preToCodeBlock } from "./helpers"

export const Pre = (preProps: any) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <CodeBlock codeString={props.codeString} language={props.language} />
  }
  return <pre {...preProps} />
}
