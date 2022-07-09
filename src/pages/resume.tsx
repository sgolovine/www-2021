import axios from "axios"
import Head from "next/head"
import { Layout } from "~/components/layout"
import { ResumePage } from "~/features/ResumePage"
import { ResumePageProps } from "~/features/ResumePage/ResumePage"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<ResumePageProps> = props => (
  <ResumePage {...props} />
)

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine :: Resume</title>
    </Head>
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
