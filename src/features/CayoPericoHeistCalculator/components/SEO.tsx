/**
 * SEO Component for this app
 */

import { NextSeo } from "next-seo"

const title = "Cayo Perico Payout Calculator"
const url = "https://sunnygolovine.com/apps/cayo-perico-payout-calculator"
const description =
  "A simple calculator you can use to calculate the payout for the Cayo Perico heist in Grand Theft Auto Online"

export const AppSEO = () => (
  <NextSeo
    title={title}
    canonical={url}
    description={description}
    openGraph={{ url, title, description }}
    twitter={{ site: url, cardType: "summary_large_image" }}
  />
)
