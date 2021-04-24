import React, { ReactNode, useContext } from "react"
import { Header } from "~/components/Typography"
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
  type: string
  itemKey: string
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

function formatLink(link: string, type: string) {
  switch (type) {
    case "phone":
      return `tel:${link}`
    case "email":
      return `mailto:${link}`
    default:
      return link
  }
}

const LinkItem: React.FC<Props> = ({ title, href, type, itemKey }) => {
  const Icon = getIcon(itemKey)
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
        {siteData.links.map(link => {
          return (
            <LinkItem
              key={link.key}
              itemKey={link.key}
              title={link.name}
              href={link.value}
              type={link.type}
            />
          )
        })}
      </div>
    </>
  )
}

export default LinkPage
