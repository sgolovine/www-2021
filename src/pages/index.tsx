import axios from "axios"
import { HomePage, IndexPageProps } from "~/features/HomePage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { getRecentPosts } from "~/services/api"

export default (props: IndexPageProps) => {
  const recentPosts = convertBlogPosts(props.recentPosts)

  return (
    <HomePage
      links={props.links}
      workItems={props.workItems}
      recentPosts={recentPosts}
    />
  )
}

export async function getStaticProps() {
  const contactResp = await axios.get("/cms/site-data/contact.json")
  const workResp = await axios.get("/cms/site-data/work.json")
  const contactData = contactResp.data
  const workData = workResp.data["work-data"]
  const recentPosts = getRecentPosts()

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
      recentPosts,
    },
  }
}
