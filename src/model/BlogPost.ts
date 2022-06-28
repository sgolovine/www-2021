export type BlogPost = {
  id: string
  title: string
  date: Date
  description: string
  path: string
  type: "local" | "remote"
}

export type OtherPosts = {
  id: string
  title: string
  link: string
  date: string
  postType: "local" | "remote"
}

export type PostType = "post" | "snippet"

export type PostMetadata = {
  title: string
  description: string
  date: string
  slug: string
  published: boolean
}
