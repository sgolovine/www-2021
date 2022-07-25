import { NextPage } from "next"
import { SocialMediaLinksPage } from "~/features/SocialMediaLinksPage"
import { getSiteData } from "~/services/api/siteData"

interface Props {
  email: string
  github: string
  instagram: string
  linkedin: string
  website: string
}

const Page: NextPage<Props> = ({
  email,
  github,
  instagram,
  linkedin,
  website,
}) => (
  <SocialMediaLinksPage
    email={email}
    github={github}
    instagram={instagram}
    linkedin={linkedin}
    website={website}
  />
)

export const getStaticProps = async () => {
  const siteData = getSiteData([
    "email",
    "github",
    "instagram",
    "linkedin",
    "website",
  ])

  return {
    props: {
      email: siteData.email,
      github: siteData.github,
      instagram: siteData.instagram,
      linkedin: siteData.linkedin,
      website: siteData.website,
    },
  }
}

export default Page
