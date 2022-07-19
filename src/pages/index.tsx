import { PageSEO } from "~/components/seo/PageSEO"
import { ContactMe } from "~/features/ContactMeWidget"
import { HomePage, IndexPageProps } from "~/features/HomePage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { getRecentPosts } from "~/services/api"
import { getSiteData } from "~/services/api/siteData"
import { GlobalStyle } from "~/styles/GlobalStyle"
import { NextPageWithLayout, StaticProps } from "./_app"
import FeatureFlags from "~/defines/featureFlags"

const Page: NextPageWithLayout<IndexPageProps> = props => {
  const recentPosts = convertBlogPosts(props.recentPosts)

  return (
    <>
      <HomePage siteData={props.siteData} recentPosts={recentPosts} />
      {FeatureFlags.ContactMeWidget && <ContactMe />}
    </>
  )
}

Page.getLayout = page => (
  <>
    <PageSEO pageTitle="Home" />
    <GlobalStyle />
    {page}
  </>
)

export const getStaticProps = async (): StaticProps<IndexPageProps> => {
  const siteData = getSiteData()
  const recentPosts = getRecentPosts()

  return {
    props: {
      siteData,
      recentPosts,
    },
  }
}

export default Page
