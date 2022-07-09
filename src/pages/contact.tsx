import Head from "next/head"
import { Layout } from "~/components/layout"
import { ContactPage } from "~/features/ContactPage"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => <ContactPage />

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine :: Contact</title>
    </Head>
    <Layout pageTitle="Contact">{page}</Layout>
  </>
)

export default Page
