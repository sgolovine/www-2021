import axios from "axios"
import Head from "next/head"
import { HomePage, IndexPageProps } from "~/features/HomePage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { getRecentPosts } from "~/services/api"
import { getSiteData } from "~/services/api/siteData"
import { GlobalStyle } from "~/styles/GlobalStyle"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<IndexPageProps> = props => {
  const recentPosts = convertBlogPosts(props.recentPosts)

  return <HomePage siteData={props.siteData} recentPosts={recentPosts} />
}

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine</title>
    </Head>
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
