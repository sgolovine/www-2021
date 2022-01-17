import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { useData } from "~/hooks/useData"
import {
  DevToIcon,
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  TwitterIcon,
} from "~/icons/Brands"
import { ExternalLinkIcon2 } from "~/icons/ExternalLink"

interface Props {
  title: string
  href: string
  type?: string
  icon: string
}

function getIcon(key: string) {
  switch (key) {
    case "phone":
      return <PhoneIcon />
    case "email":
      return <EmailIcon />
    case "instagram":
      return <InstagramIcon />
    case "twitter":
      return <TwitterIcon />
    case "github":
      return <GithubIcon />
    case "linkedin":
      return <LinkedInIcon />
    case "devto":
      return <DevToIcon />
    default:
      return <ExternalLinkIcon2 />
  }
}

function formatLink(link: string, type?: string) {
  switch (type) {
    case "phone":
      return `tel:${link}`
    case "email":
      return `mailto:${link}`
    default:
      return link
  }
}

const LinkItem: React.FC<Props> = ({ title, href, type, icon }) => {
  const Icon = getIcon(icon)
  const formattedHref = formatLink(href, type)

  return (
    <span className="flex flex-row items-center mb-6">
      <div className="h-6 w-6">{Icon}</div>
      <a
        href={formattedHref}
        className="ml-2 text-2xl text-brand-link font-bold hover:text-brand-yellow"
      >
        {title}
      </a>
    </span>
  )
}

const LinkPage = () => {
  const { siteData } = useData()

  return (
    <>
      <Header>Links</Header>
      <div>
        <LinkItem
          title="Phone"
          href={siteData.linkedin}
          type="phone"
          icon="phone"
        />
        <LinkItem
          title="Email"
          href={siteData.email}
          type="email"
          icon="email"
        />
        <LinkItem
          title="Instagram"
          href={siteData.instagram}
          icon="instagram"
        />
        <LinkItem title="Twitter" href={siteData.twitter} icon="twitter" />
        <LinkItem title="Github" href={siteData.github} icon="github" />
        <LinkItem title="LinkedIn" href={siteData.linkedin} icon="linkedin" />
        <LinkItem
          title="The Practical Dev"
          href={siteData.dev_to}
          icon="devto"
        />
      </div>
    </>
  )
}

export default withMainLayout(LinkPage)
