import React from "react"
import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

const Document = () => (
  <Html>
    <Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
