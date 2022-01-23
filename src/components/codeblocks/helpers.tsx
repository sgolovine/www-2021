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
