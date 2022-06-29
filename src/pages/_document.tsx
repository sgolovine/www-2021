import React from "react"
import { Html, Head, Main, NextScript } from "next/document"
import { SiteSEO } from "~/components/common/SEO"

const Document = () => (
  <Html>
    <Head>
      <SiteSEO />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
