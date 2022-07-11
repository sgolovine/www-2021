import { Layout } from "~/components/layout"
import { PageSEO } from "~/components/seo"
import { BlogPage } from "~/features/BlogPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getLocalPosts, getRemotePosts } from "~/services/api"
import { NextPageWithLayout, StaticProps } from "./_app"

interface Props {
  localPosts: RawBlogPost[]
  remotePosts: RawBlogPost[]
}

const Page: NextPageWithLayout<Props> = props => {
  const localPosts = convertBlogPosts(props.localPosts)
  const remotePosts = convertBlogPosts(props.remotePosts)

  return <BlogPage localPosts={localPosts} remotePosts={remotePosts} />
}

Page.getLayout = page => (
  <>
    <PageSEO pageTitle="Blog" pagePath="blog" />
    <Layout pageTitle="Blog">{page}</Layout>
  </>
)
export const getStaticProps = async (): StaticProps<Props> => {
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
