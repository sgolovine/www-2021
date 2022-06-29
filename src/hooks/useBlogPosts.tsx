import { BlogPost } from "~/model/BlogPost"

const useBlogPosts = (): {
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
  recentPosts: BlogPost[]
} => ({
  localPosts: [],
  remotePosts: [],
  recentPosts: [],
})

export default useBlogPosts
