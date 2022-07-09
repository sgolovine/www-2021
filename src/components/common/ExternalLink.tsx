import classnames from "classnames"
import Link from "next/link"
import React from "react"
import { ExternalLinkIcon } from "~/icons/ExternalLink"

interface Props {
  label: string
  href?: string | null

  // whether to render Link to a
  external?: boolean

  // disable icon on external links
  noIcon?: boolean

  // optional classnames
  containerClassnames?: string
  textClassnames?: string
  iconClassnames?: string

  // text size
  sm?: boolean
  lg?: boolean
}

export const ExternalLink: React.FC<Props> = ({
  label,
  href,
  external = false,
  noIcon = false,
  containerClassnames,
  textClassnames,
  iconClassnames,
  sm,
  lg,
}) => {
  const containerClasses = classnames(
    containerClassnames,
    "flex",
    "flex-row",
    "items-center"
  )

  const textClasses = classnames(
    textClassnames,
    "font-bold",
    "text-brand-link",
    {
      "hover:text-brand-yellow": !!href,
      "text-lg": lg,
      "text-sm": sm,
    }
  )

  const iconClasses = classnames(
    iconClassnames,
    "h-6",
    "w-6",
    "ml-2",
    "text-brand-yellow"
  )

  // If we have a defined href and external link
  // Render a regular <a> tag.
  if (href && external) {
    return (
      <span className={containerClasses}>
        <a className={textClasses} href={href}>
          {label}
        </a>
        {!noIcon && <ExternalLinkIcon className={iconClasses} />}
      </span>
    )
  }

  // If we have an href but external is not specified
  // We can assume that the link is internal and use
  if (href) {
    return (
      <Link href={href}>
        <a className={textClasses}>{label}</a>
      </Link>
    )
  }

  // In the case of us not having an href
  // We render a <p> tag instead
  return <p className={textClasses}>{label}</p>
}
