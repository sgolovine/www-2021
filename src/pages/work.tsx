import axios from "axios"
import { WorkPage } from "~/features/WorkPage"
import { SiteWorkData } from "~/model/SiteData"

export default WorkPage

export async function getStaticProps() {
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
