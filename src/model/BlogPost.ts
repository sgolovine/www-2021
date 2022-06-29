export interface RawBlogPost {
  id: string
  title: string
  description: string
  path: string
  type: BlogPostType
  rawDate?: string
}

export interface BlogPost extends RawBlogPost {
  date?: Date
}

export type OtherPosts = {
  id: string
  title: string
  link: string
  date: string
  postType: "local" | "remote"
}

export type PostType = "post" | "snippet"

export enum BlogPostType {
  // eslint-disable-next-line no-unused-vars
  Local = "local",
  // eslint-disable-next-line no-unused-vars
  Remote = "remote",
}
