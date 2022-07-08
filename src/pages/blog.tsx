import { Layout } from "~/components/layout"
import { BlogPage } from "~/features/BlogPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getLocalPosts, getRemotePosts } from "~/services/api"
import { NextPageWithLayout } from "./_app"

interface Props {
  localPosts: RawBlogPost[]
  remotePosts: RawBlogPost[]
}

const Page: NextPageWithLayout<Props> = props => {
  const localPosts = convertBlogPosts(props.localPosts)
  const remotePosts = convertBlogPosts(props.remotePosts)

  return <BlogPage localPosts={localPosts} remotePosts={remotePosts} />
}

Page.getLayout = page => <Layout>{page}</Layout>

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

export default Page
