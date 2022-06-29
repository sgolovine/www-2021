import axios from "axios"
import { HomePage } from "~/features/HomePage"

export default HomePage

export async function getStaticProps() {
  const contactResp = await axios.get("/cms/site-data/contact.json")
  const workResp = await axios.get("/cms/site-data/work.json")
  const contactData = contactResp.data
  const workData = workResp.data["work-data"]

  return {
    props: {
      links: {
        email: contactData.email,
        linkedIn: contactData.linkedin,
        github: contactData.github,
        devTo: contactData["dev-to"],
      },
      workItems: (workData ?? []).filter(
        (item: any) => item["show-in-recent-projects"]
      ),
    },
  }
}
