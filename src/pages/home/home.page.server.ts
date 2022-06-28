import { getSiteData } from "~/helpers/getSiteData.node"

export async function onBeforeRender() {
  const siteData = await getSiteData()
  return {
    pageContext: {
      pageProps: {
        siteData,
      },
    },
  }
}
