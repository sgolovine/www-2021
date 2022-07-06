import { BlogPage } from "~/features/BlogPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getLocalPosts } from "~/services/api"

interface Props {
  localPosts: RawBlogPost[]
  remotePosts: RawBlogPost[]
}

export default (props: Props) => {
  const localPosts = convertBlogPosts(props.localPosts)

  return <BlogPage localPosts={localPosts} remotePosts={props.remotePosts} />
}

export const getStaticProps = async () => {
  const localPosts = getLocalPosts()
  return {
    props: {
      localPosts,
      remotePosts: [],
    },
  }
}
