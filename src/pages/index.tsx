import axios from "axios"
import { HomePage, IndexPageProps } from "~/features/HomePage"
import { sortDescendingByDate } from "~/helpers/sortRawPosts"
import { BlogPostType, RawBlogPost } from "~/model/BlogPost"
import {
  BlogPostMapItem,
  getPostMetadata,
  RemotePostItem,
} from "~/services/getPostMetadata"

export default (props: IndexPageProps) => {
  const recentPosts = props.recentPosts.map(post => ({
    ...post,
    date: new Date(post.rawDate!),
  }))

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

  const postMaps = await getPostMetadata()

  const recentPosts: RawBlogPost[] = [
    ...postMaps.posts,
    ...postMaps.remotePosts,
  ]
    .map((item, index) => ({
      id: `recent-post-${index}`,
      title: item.title,
      description: item.description,
      rawDate: item.date,
      type: Object.prototype.hasOwnProperty.call(item, "url")
        ? BlogPostType.Remote
        : BlogPostType.Local,
      path: (item as BlogPostMapItem).slug
        ? `/blog/post/${(item as BlogPostMapItem).slug}`
        : (item as RemotePostItem).url,
    }))
    .sort(sortDescendingByDate)
    .slice(0, 3)

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
