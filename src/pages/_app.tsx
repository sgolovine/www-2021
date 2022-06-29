import React from "react"
import { AppProps } from "next/app"

import "../styles/global.css"
import "../styles/tailwind.css"
import "../styles/font.css"
import "../styles/loader.css"
import "../styles/punk.css"
import "../styles/styles.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default App
