import { BlogPost, RawBlogPost } from "~/model/BlogPost"

/** Converts a "raw" blog post into a regular one */
export function convertBlogPost(post: RawBlogPost): BlogPost {
  if (post.rawDate) {
    return {
      ...post,
      date: new Date(post.rawDate),
    }
  }
  // no-op for snippets
  return post
}

export function convertBlogPosts(posts: RawBlogPost[]): BlogPost[] {
  return posts.map(post => convertBlogPost(post))
}
