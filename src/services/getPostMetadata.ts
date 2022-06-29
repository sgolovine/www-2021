import axios from "axios"

export type BlogPostMapItem = {
  title: string
  description: string
  date: string
  slug: string
  published: boolean
  fullPath: string
}

export type SnippetsMapItem = {
  title: string
  description: string
  slug: string
  tags: string
  published: boolean
  fullPath: string
}

export type RemotePostItem = {
  id: number
  title: string
  description: string
  url: string
  date: string
}

type BlogPostResponse = BlogPostMapItem[]

type SnippetsResponse = SnippetsMapItem[]

type RemotePostsResponse = {
  posts: RemotePostItem[]
}

export async function getPostMetadata() {
  const postMaps = await Promise.all([
    axios.get<BlogPostResponse>("/blog-posts.json").then(resp => resp.data),
    axios.get<SnippetsResponse>("/snippets.json").then(resp => resp.data),
    axios
      .get<RemotePostsResponse>("/remote-posts.json")
      .then(resp => resp.data.posts),
  ])
  return {
    posts: postMaps[0],
    snippets: postMaps[1],
    remotePosts: postMaps[2],
  }
}
