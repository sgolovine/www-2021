import { Layout } from "~/components/layout"
import { LinkPage } from "~/features/LinkPage"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => <LinkPage />

Page.getLayout = page => <Layout>{page}</Layout>

export default Page
