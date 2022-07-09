export interface RawBlogPost {
  id: string
  title: string
  description: string
  path: string
  type: BlogPostType
  rawDate?: string
  published: boolean
  filePath: string
}

export interface BlogPost extends RawBlogPost {
  date?: Date
}

export enum PostType {
  // eslint-disable-next-line no-unused-vars
  Post = "post",
  // eslint-disable-next-line no-unused-vars
  Snippet = "snippet",
}

export enum BlogPostType {
  // eslint-disable-next-line no-unused-vars
  Local = "local",
  // eslint-disable-next-line no-unused-vars
  Remote = "remote",
}
