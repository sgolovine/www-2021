import React from "react"
import { Html, Head, Main, NextScript } from "next/document"
import { SiteSEO } from "~/components/common/SEO"

const Document = () => (
  <Html>
    <Head>
      <SiteSEO />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
