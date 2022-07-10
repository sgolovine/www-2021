import axios from "axios"
import Head from "next/head"
import { Layout } from "~/components/layout"
import { LinkPage, LinkPageProps } from "~/features/LinkPage"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<LinkPageProps> = props => <LinkPage {...props} />

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine :: Links</title>
    </Head>
    <Layout pageTitle="Links">{page}</Layout>
  </>
)

export const getStaticProps = async (): StaticProps<LinkPageProps> => {
  const contactResp = await axios.get("/cms/site-data/contact.json")
  const contactData = contactResp.data

  return {
    props: {
      phone: contactData["phone-number"],
      email: contactData.email,
      instagram: contactData.instagram,
      twitter: contactData.twitter,
      github: contactData.github,
      linkedin: contactData.linkedin,
      devto: contactData["dev-to"],
    },
  }
}

export default Page
