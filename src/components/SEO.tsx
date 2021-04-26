import React from "react"
import { Helmet } from "react-helmet"

const title = "Sunny Golovine"
const description = "Personal website of Sunny Golovine."
const robots = "index, follow"
const keywords = "portfolio, personal website, javascript, react"
const image = "/social-image.jpg"

const SEO = () => {
  return (
    <Helmet>
      {/* Base Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (Facebook) */}
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://sunnygolovine.com" />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="website" />
      <meta name="twitter:creator" content="@_glvn" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
