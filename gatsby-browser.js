import React from "react"
import Layout from "./src/components/layout"

import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import "./src/styles/styles.css"
import "./src/styles/loader.css"

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
)
