import { BlogPage } from "~/features/BlogPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getLocalPosts, getRemotePosts } from "~/services/api"

interface Props {
  localPosts: RawBlogPost[]
  remotePosts: RawBlogPost[]
}

export default (props: Props) => {
  const localPosts = convertBlogPosts(props.localPosts)
  const remotePosts = convertBlogPosts(props.remotePosts)

  return <BlogPage localPosts={localPosts} remotePosts={remotePosts} />
}

export const getStaticProps = async () => {
  const localPosts = getLocalPosts()
  const remotePosts = getRemotePosts()
  return {
    props: {
      localPosts,
      remotePosts,
    },
  }
}
