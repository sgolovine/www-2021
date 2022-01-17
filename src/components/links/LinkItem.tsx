import React, { useState } from "react"
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
import { stripHttp } from "~/helpers/stripHttp"

interface Props {
  title: string
  href: string
  type?: string
  icon: string
  showPreviewOnHover?: boolean
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

export const LinkItem: React.FC<Props> = ({
  title,
  href,
  type,
  icon,
  showPreviewOnHover,
}) => {
  const Icon = getIcon(icon)
  const formattedHref = formatLink(href, type)

  const [isHovering, setIsHovering] = useState<boolean>(false)

  const handleEnter = () => {
    setIsHovering(true)
  }

  const handleLeave = () => {
    setIsHovering(false)
  }

  return (
    <span className="flex flex-row items-center mb-6">
      <div className="h-6 w-6">{Icon}</div>
      <a
        href={formattedHref}
        className="ml-2 text-2xl text-brand-link font-bold hover:text-brand-yellow"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {title}
      </a>
      {showPreviewOnHover && isHovering && (
        <p className="ml-4 text-sm text-brand-link">{stripHttp(href)}</p>
      )}
    </span>
  )
}
