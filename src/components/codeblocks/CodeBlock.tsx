/* eslint-disable react/jsx-props-no-spreading */
import classNames from "classnames"
import copy from "copy-to-clipboard"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"
import React, { useEffect, useState } from "react"
import { CheckmarkIcon } from "~/icons/CheckmarkIcon"
import { CopyIcon } from "~/icons/CopyIcon"

interface CodeBlockProps {
  codeString: string
  language: Language
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language,
}) => {
  const [hasClicked, setHasClicked] = useState<boolean>(false)

  useEffect(() => {
    if (hasClicked) {
      setTimeout(() => {
        setHasClicked(false)
      }, 15000)
    }
  }, [hasClicked])

  const textHintClasses = classNames(
    "text-xs",
    "mr-2",
    "m-0",
    "p-1",
    "rounded-sm",
    "transition-all",
    "linear",
    "text-gray-900",
    "uppercase",
    "font-bold",
    "bg-brand-yellow"
  )

  const handleClick = () => {
    if (!hasClicked) {
      setHasClicked(true)
    }
    copy(codeString)
  }

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <pre className={className} style={style}>
            <div className="p-0 m-0 flex flex-row items-center justify-end">
              <p className={textHintClasses}>{language}</p>
              <button onClick={handleClick} type="button" className="p-1 mx-1">
                {hasClicked ? <CheckmarkIcon /> : <CopyIcon />}
              </button>
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
      )}
    </Highlight>
  )
}
