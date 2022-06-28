import { getSiteData } from "~/helpers/node"

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
