import React from "react"
import Layout from "./src/components/layout"

import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import "./src/styles/styles.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
