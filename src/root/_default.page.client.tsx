import ReactDOM from "react-dom"
import React from "react"
import { getPage } from "vite-plugin-ssr/client"
import { PageContext } from "./types"
import { ROOT_EL } from "./defaults"

/** Main */
async function main() {
  const { Page, pageProps } = await getPage<PageContext>()

  ReactDOM.hydrate(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Page {...pageProps} />,
    document.getElementById(ROOT_EL)
  )
}

main()
