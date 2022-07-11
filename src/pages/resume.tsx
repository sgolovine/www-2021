import axios from "axios"
import { Layout } from "~/components/layout"
import { PageSEO } from "~/components/seo"
import { ResumePage } from "~/features/ResumePage"
import { ResumePageProps } from "~/features/ResumePage/ResumePage"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<ResumePageProps> = props => (
  <ResumePage {...props} />
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
