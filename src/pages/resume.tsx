import axios from "axios"
import { Layout } from "~/components/layout"
import { ResumePage } from "~/features/ResumePage"
import { ResumePageProps } from "~/features/ResumePage/ResumePage"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout<ResumePageProps> = props => (
  <ResumePage {...props} />
)

Page.getLayout = page => <Layout noContentMargin>{page}</Layout>

export async function getStaticProps() {
  const resume = await axios.get("/resume/resume.json")

  return {
    props: {
      data: resume.data,
    },
  }
}

export default Page
