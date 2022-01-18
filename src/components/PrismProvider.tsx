/* eslint-disable react/jsx-props-no-spreading */
/**
 * This component provides prism syntax highlighting to any
 * MDXRenderer
 */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"

interface CodeBlockProps {
  codeString: string
  language: Language
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

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, language }) => (
  <Highlight
    {...defaultProps}
    theme={vsDark}
    code={codeString}
    language={language}
  >
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

const Pre = (preProps: any) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <CodeBlock codeString={props.codeString} language={props.language} />
  }
  return <pre {...preProps} />
}

const PrismProvider: React.FC = ({ children }) => (
  <MDXProvider components={{ pre: Pre }}>{children}</MDXProvider>
)

export default PrismProvider
