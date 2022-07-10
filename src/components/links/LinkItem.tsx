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
import classNames from "classnames"

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

  const iconContainerClasses = classNames("h-4", "w-4", "mr-2", {
    "fill-white": !isHovering,
    "fill-brand-yellow": isHovering,
  })

  return (
    <a
      href={formattedHref}
      className="border-2 hover:ring-1 ring-brand-yellow border-gray-600 hover:border-brand-yellow p-4 mb-4 flex flex-row items-center justify-between"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex flex-row items-center">
        <div className={iconContainerClasses}>{Icon}</div>
        <p className="text-md font-medium">{title}</p>
      </div>
      {showPreviewOnHover && isHovering && (
        <p className="text-sm font-medium text-brand-yellow">
          {stripHttp(href)}
        </p>
      )}
    </a>
  )
}
