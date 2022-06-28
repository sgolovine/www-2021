/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import SEO from "~/components/common/SEO"
import { PageContext } from "./types"
// Styles
import "./styles/font.css"
import "./styles/tailwind.css"
import "./styles/global.css"
import "./styles/styles.css"
import "./styles/loader.css"
import "./styles/punk.css"

type Props = Pick<PageContext, "Page" | "pageProps">

export const PageWrapper = (props: Props) => {
  const { Page, pageProps } = props

  return (
    <>
      <SEO />
      <Page {...pageProps} />
    </>
  )
}
