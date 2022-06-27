import { ReactElement } from "react"
import { PageContextBuiltInClient } from "vite-plugin-ssr/client"

export interface PageContext extends PageContextBuiltInClient {
  Page: () => ReactElement
  pageProps: Record<string, any>
  urlPathname: string
  documentProps?: {
    title?: string
    description?: string
  }
}
