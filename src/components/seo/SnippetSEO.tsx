import { NextSeo } from "next-seo"
import * as constants from "./constants"

interface SnippetSEOProps {
  title: string
  description: string
  slug: string
}

export const SnippetSEO: React.FC<SnippetSEOProps> = ({
  title,
  description,
  slug,
}) => {
  const canonicalUrl = `https://sunnygolovine.com/snippet/${slug}`

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
        }}
        twitter={{
          handle: constants.twitterHandle,
          site: canonicalUrl,
          cardType: "summary_large_image",
        }}
      />
    </>
  )
}
