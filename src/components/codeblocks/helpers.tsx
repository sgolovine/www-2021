import { Language } from "prism-react-renderer"
import React from "react"
import * as languageIcons from "~/icons/languageIcons"

export function renderLanguageIcon(lang: Language) {
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

export function preToCodeBlock(preProps: any) {
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
