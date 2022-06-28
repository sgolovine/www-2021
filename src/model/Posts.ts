/** Models for Posts + Snippets */

export enum PostType {
  // eslint-disable-next-line no-unused-vars
  Post = "post",
  // eslint-disable-next-line no-unused-vars
  RemotePost = "remote-post",
  // eslint-disable-next-line no-unused-vars
  Snippet = "snippet",
}

/**
 * Common Metadata that is common
 * to both posts and snippets
 */
interface CommonMetadata {
  // title of the post
  title: string
  // description of the post
  description: string
  // is the post published
  published: string
  // the type of post
  postType: PostType
}

export interface BlogPostMetadata extends CommonMetadata {
  // `/blog/post/:slug`
  slug: string
  // Date the post was published / updated
  date: string
}

export interface SnippetsMetadata extends CommonMetadata {
  // `/snippets/snippet/:slug`
  slug: string
  // Comma separated list of tags
  tags: string
}

export interface RemotePostMetadata extends CommonMetadata {
  // id of the post
  id: string
  // url to the remote post
  url: string
  // published date of remote post
  date: string
}

// Defines "other posts" that are shown at the bottom of a post
// These can be either BlogPostMetadata or RemotePostMetadata
export type OtherPosts = (BlogPostMetadata | RemotePostMetadata)[]
