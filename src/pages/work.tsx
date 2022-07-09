import axios from "axios"
import { Layout } from "~/components/layout"
import { WorkPage } from "~/features/WorkPage"
import { WorkPageProps } from "~/features/WorkPage/WorkPage"
import { SiteWorkData } from "~/model/SiteData"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<WorkPageProps> = props => <WorkPage {...props} />

Page.getLayout = page => <Layout>{page}</Layout>

export const getStaticProps = async (): StaticProps<WorkPageProps> => {
  const resp = await axios.get("/cms/site-data/work.json")

  const siteWorkData: SiteWorkData[] = resp.data["work-data"].map(
    (item: any) => ({
      name: item.name,
      description: item.description,
      project_type: item["project-type"],
      show_in_recent_projects: item["show-in-recent-projects"],
      url: item.url ?? "",
    })
  )

  return {
    props: {
      work: siteWorkData,
    },
  }
}

export default Page
