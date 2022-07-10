import { ArticleJsonLd, NextSeo } from "next-seo"
import * as constants from "./constants"

interface PostSEOProps {
  title: string
  description: string
  slug: string
  date?: string
}

export const PostSEO: React.FC<PostSEOProps> = ({
  title,
  description,
  slug,
  date,
}) => {
  const formattedDate = date ? new Date(date).toISOString() : ""
  const canonicalUrl = `https://sunnygolovine.com/post/${slug}`

  return (
    <>
      <NextSeo
        title={title}
        // We have to override the site template here.
        titleTemplate={"%s"}
        canonical={canonicalUrl}
        description={description}
        openGraph={{
          url: canonicalUrl,
          title,
          description,
          site_name: constants.title,
          article: {
            publishedTime: formattedDate,
            authors: ["Sunny Golovine"],
          },
        }}
        twitter={{
          handle: constants.twitterHandle,
          site: canonicalUrl,
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        url={canonicalUrl}
        title={title}
        images={[]}
        datePublished={formattedDate}
        authorName="Sunny Golovine"
        publisherName="Sunny Golovine"
        publisherLogo="https://sunnygolovine.com/images/social-image.jpg"
        description={description}
      />
    </>
  )
}
