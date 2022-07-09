import { NextPage } from "next"
import dynamic from "next/dynamic"
import { cmsConfig } from "~/cms"
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

const Page: NextPage = () => {
  return <CMS />
}

export default Page
