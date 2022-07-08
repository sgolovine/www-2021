import { BlogPost, RawBlogPost } from "~/model/BlogPost"

export function convertBlogPosts(posts: RawBlogPost[]): BlogPost[] {
  return posts.map(post => {
    if (post.rawDate) {
      return {
        ...post,
        date: new Date(post.rawDate),
      }
    }
    // no-op for snippets
    return post
  })
}
