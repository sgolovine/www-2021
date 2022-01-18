/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"

interface Props {
  codeString: string
  language: Language
}

const CodeBlock: React.FC<Props> = ({ codeString, language }) => (
  <Highlight {...defaultProps} code={codeString} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default CodeBlock
