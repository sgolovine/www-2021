import React from "react"
import { Helmet } from "react-helmet"

interface PostSEOProps {
  title: string
  description: string
  path: string
  date?: string
}

const title = "Sunny Golovine"
const description = "Personal website of Sunny Golovine."
const robots = "index, follow"
const keywords = "portfolio, personal website, javascript, react"
const image = "/social-image.jpg"

const SEO = () => (
  <Helmet>
    {/* Base Tags */}
    <html lang="en" />
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph (Facebook) */}
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={image} />
    <meta name="og:image:alt" content="Sunny Golovine" />
    <meta property="og:locale" content="en_US" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://sunnygolovine.com" />

    {/* Twitter */}
    <meta name="twitter:card" content="website" />
    <meta name="twitter:creator" content="@_glvn" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image" content={image} />
  </Helmet>
)

export const PostSEO: React.FC<PostSEOProps> = ({
  title,
  description,
  path,
  date,
}) => {
  const formattedDate = date ? new Date(date).toISOString() : null
  const canonicalURL = `https://sunnygolovine.com${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta name="og:author" content="Sunny Golovine" />
      {formattedDate && (
        <meta name="og:published_time" content={formattedDate} />
      )}

      <link rel="canonical" href={canonicalURL} />
    </Helmet>
  )
}

export default SEO
