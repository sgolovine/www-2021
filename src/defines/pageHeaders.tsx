export const defaultHeader = "Sunny Golovine"
export const defaultPostHeader = "Post"

export const mobilePageHeaders = {
  "/": defaultHeader,
  "/blog": "Blog",
  "/links": "Links",
  "/resume": "Resume",
  "/contact": "Contact",
  "/snippets": "Snippets",
}

export type PageHeaderKeys = keyof typeof mobilePageHeaders
