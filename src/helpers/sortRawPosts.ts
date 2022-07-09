import { RawBlogPost } from "~/model/BlogPost"

export function sortDescendingByDate(a: RawBlogPost, b: RawBlogPost) {
  return -new Date(a.rawDate!) - -new Date(b.rawDate!)
}
