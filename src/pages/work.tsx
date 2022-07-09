import axios from "axios"
import Head from "next/head"
import { Layout } from "~/components/layout"
import { WorkPage } from "~/features/WorkPage"
import { WorkPageProps } from "~/features/WorkPage/WorkPage"
import { getSiteData } from "~/services/api/siteData"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<WorkPageProps> = props => <WorkPage {...props} />

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine :: Work</title>
    </Head>
    <Layout pageTitle="Work">{page}</Layout>
  </>
)

export const getStaticProps = async (): StaticProps<WorkPageProps> => {
  const siteData = getSiteData()

  return {
    props: {
      siteData,
    },
  }
}

export default Page
