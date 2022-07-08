import dynamic from "next/dynamic"
import { ReactElement } from "react"
import { cmsConfig } from "~/cms"
import AdminLayout from "~/components/layout/AdminLayout/AdminLayout"
import { NextPageWithLayout } from "./_app"

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms: any) =>
      cms.init({ config: cmsConfig })
    ),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
)

const Page: NextPageWithLayout = () => {
  return <CMS />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Page
