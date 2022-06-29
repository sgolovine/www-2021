import { BlogPage } from "~/features/BlogPage"
import { sortDescendingByDate } from "~/helpers/sortRawPosts"
import { BlogPost, BlogPostType, RawBlogPost } from "~/model/BlogPost"
import { getPostMetadata } from "~/services/getPostMetadata"

interface Props {
  localPosts: RawBlogPost[]
  remotePosts: RawBlogPost[]
}

export default (props: Props) => {
  const localPosts: BlogPost[] = props.localPosts.map(post => ({
    ...post,
    date: new Date(post.rawDate!),
  }))

  const remotePosts: BlogPost[] = props.remotePosts.map(post => ({
    ...post,
    date: new Date(post.rawDate!),
  }))

  return <BlogPage localPosts={localPosts} remotePosts={remotePosts} />
}

export async function getStaticProps() {
  const postMaps = await getPostMetadata()

  const rawLocalBlogPosts: RawBlogPost[] = postMaps.posts
    .filter(item => item.published)
    .map((post, index) => ({
      id: `local-post-${index}`,
      title: post.title,
      description: post.description,
      path: `/blog/post/${post.slug}`,
      type: BlogPostType.Local,
      rawDate: post.date,
    }))
    .sort(sortDescendingByDate)

  const rawRemoteBlogPosts: RawBlogPost[] = postMaps.remotePosts.map(
    (post, index) => ({
      id: `remote-post-${index}`,
      title: post.title,
      description: post.description,
      path: post.url,
      type: BlogPostType.Remote,
      rawDate: post.date,
    })
  )

  return {
    props: {
      localPosts: rawLocalBlogPosts,
      remotePosts: rawRemoteBlogPosts,
    },
  }
}
