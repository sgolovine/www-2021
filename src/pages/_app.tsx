import React from "react"
import { AppProps } from "next/app"
import { useRequestInterceptor } from "~/services/requestInterceptor"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/font.css"
import "../styles/loader.css"
import "../styles/punk.css"
import "../styles/styles.css"

useRequestInterceptor()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default App
