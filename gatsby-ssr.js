import React from "react"
import SEO from "./src/components/common/SEO"

import "./src/styles/font.css"
import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import "./src/styles/styles.css"
import "./src/styles/loader.css"

export const wrapPageElement = ({ element }) => (
  <>
    <SEO />
    {element}
  </>
)
