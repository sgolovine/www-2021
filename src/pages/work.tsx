import { Layout } from "~/components/layout"
import { PageSEO } from "~/components/seo"
import { ContactMeWidget } from "~/features/ContactMeWidget"
import { WorkPage } from "~/features/WorkPage"
import { WorkPageProps } from "~/features/WorkPage/WorkPage"
import { getSiteData } from "~/services/api/siteData"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<WorkPageProps> = props => (
  <>
    <WorkPage {...props} />
    <ContactMeWidget />
  </>
)

Page.getLayout = page => (
  <>
    <PageSEO pageTitle="Work" pagePath="work" />
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
