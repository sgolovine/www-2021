import axios from "axios"
import { Layout } from "~/components/layout"
import { PageSEO } from "~/components/seo"
import { ContactMeWidget } from "~/features/ContactMeWidget"
import { ResumePage } from "~/features/ResumePage"
import { ResumePageProps } from "~/features/ResumePage/ResumePage"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<ResumePageProps> = props => (
  <>
    <ResumePage {...props} />
    <ContactMeWidget />
  </>
)

Page.getLayout = page => (
  <>
    <PageSEO pageTitle="Resume" pagePath="resume" />
    <Layout pageTitle="Resume" noContentMargin>
      {page}
    </Layout>
  </>
)

export const getStaticProps = async (): StaticProps<ResumePageProps> => {
  const resume = await axios.get("/resume/resume.json")

  return {
    props: {
      data: resume.data,
    },
  }
}

export default Page
