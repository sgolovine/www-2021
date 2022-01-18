/* eslint-disable react/jsx-props-no-spreading */
/**
 * This component provides prism syntax highlighting to any
 * MDXRenderer
 */
import { MDXProvider } from "@mdx-js/react"
import classNames from "classnames"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"
import React, { useState } from "react"
import * as languageIcons from "~/icons/languageIcons"

interface CodeBlockProps {
  codeString: string
  language: Language
}

function renderLanguageIcon(lang: Language) {
  switch (lang) {
    case "bash":
      return <languageIcons.BashIcon />
    case "markup":
      return <languageIcons.HTMLIcon />
    case "javascript":
      return <languageIcons.JavascriptIcon />
    case "json":
      return <languageIcons.JsonIcon />
    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>
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

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, language }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const textHintClasses = classNames(
    "text-sm",
    "mr-2",
    "m-0",
    "p-0",
    "transition-all",
    "linear",
    {
      "opacity-100": isHovering,
      "opacity-0": !isHovering,
    }
  )

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const icon = renderLanguageIcon(language)
        return (
          <div>
            <pre className={className} style={style}>
              <div className="p-0 m-0 flex flex-row items-center justify-end">
                <p className={textHintClasses}>{language}</p>
                <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="h-6 w-6"
                >
                  {icon}
                </div>
              </div>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )
      }}
    </Highlight>
  )
}

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
