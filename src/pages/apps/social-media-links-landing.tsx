import { NextPage } from "next"
import { SocialMediaLinksPage } from "~/features/SocialMediaLinksPage"
import { getSiteData } from "~/services/api/siteData"

interface Props {
  email: string
  github: string
  instagram: string
  linkedin: string
  website: string
  whatsApp: string
}

const Page: NextPage<Props> = ({
  email,
  github,
  instagram,
  linkedin,
  website,
  whatsApp,
}) => (
  <SocialMediaLinksPage
    email={email}
    github={github}
    instagram={instagram}
    linkedin={linkedin}
    website={website}
    whatsApp={whatsApp}
  />
)

export const getStaticProps = async () => {
  const siteData = getSiteData([
    "email",
    "github",
    "instagram",
    "linkedin",
    "website",
    "whatsApp",
  ])

  return {
    props: {
      email: siteData.email,
      github: siteData.github,
      instagram: siteData.instagram,
      linkedin: siteData.linkedin,
      website: siteData.website,
      whatsApp: siteData.whatsApp,
    },
  }
}

export default Page
