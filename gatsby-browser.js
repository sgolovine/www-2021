import React from "react"
import Layout from "./src/components/layout"
import { AnalyticsProvider } from "./src/hooks/useAnalytics"

import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import "./src/styles/styles.css"

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnalyticsProvider>
      <Layout {...props}>{element}</Layout>
    </AnalyticsProvider>
  )
}
