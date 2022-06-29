import { getSiteData } from "~/helpers/node"
import { getOtherPosts } from "~/helpers/node/getOtherPosts"

export async function onBeforeRender() {
  const siteData = await getSiteData()
  const recentPosts = await getOtherPosts()
  return {
    pageContext: {
      pageProps: {
        siteData,
        recentPosts,
      },
    },
  }
}
