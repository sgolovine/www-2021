import {
  mobilePageHeaders,
  defaultPostHeader,
  PageHeaderKeys,
  defaultHeader,
} from "~/defines/pageHeaders"

export function getPageHeader(pathname: string) {
  // TODO
  // eslint-disable-next-line prefer-regex-literals
  const postRegex = new RegExp(/\/blog\/post\/.*/, "g")
  if (pathname.match(postRegex)) {
    return defaultPostHeader
  }
  const pageHeader = mobilePageHeaders[pathname as PageHeaderKeys]
  if (pageHeader) {
    return pageHeader
  }
  return defaultHeader
}
