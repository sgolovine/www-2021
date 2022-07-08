import { Helmet } from "react-helmet"

interface PostSEOProps {
  title: string
  description: string
  path: string
  date?: string
}

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
