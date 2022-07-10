import { NextPage } from "next"
import { NextSeo } from "next-seo"
import dynamic from "next/dynamic"
import { cmsConfig } from "~/cms"

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

const Page: NextPage = () => (
  <>
    <NextSeo title="CMS" nofollow noindex />
    <CMS />
  </>
)

export default Page
