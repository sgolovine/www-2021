import { NextSeo } from "next-seo"
import * as constants from "./constants"

interface Props {
  pageTitle?: string
  pagePath?: string
}

export const PageSEO: React.FC<Props> = ({ pageTitle, pagePath }) => {
  const canonicalUrl = pagePath
    ? `https://sunnygolovine.com/${pagePath}`
    : `https://sunnygolovine.com`

  return (
    <NextSeo
      title={pageTitle}
      canonical={canonicalUrl}
      titleTemplate="Sunny Golovine :: %s"
      description={constants.description}
      openGraph={{
        url: canonicalUrl,
        title: constants.title,
        description: constants.description,
        site_name: constants.title,
      }}
      twitter={{
        handle: constants.twitterHandle,
        site: canonicalUrl,
        cardType: "summary_large_image",
      }}
    />
  )
}
