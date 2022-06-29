/* eslint-disable react/jsx-props-no-spreading */
import ReactDOM from "react-dom/client"
import React from "react"
import { getPage } from "vite-plugin-ssr/client"
import { PageContext } from "./types"
import { ROOT_EL } from "./defaults"
import { PageWrapper } from "./PageWrapper"

/** Main */
async function main() {
  const { Page, pageProps } = await getPage<PageContext>()

  ReactDOM.hydrateRoot(
    document.getElementById(ROOT_EL)!,
    <PageWrapper Page={Page} pageProps={pageProps} />
  )
}

main()
