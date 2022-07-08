import { Layout } from "~/components/layout/page"
import { ContactPage } from "~/features/ContactPage"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => <ContactPage />

Page.getLayout = page => <Layout>{page}</Layout>

export default Page
