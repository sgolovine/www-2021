import classNames from "classnames"
import React from "react"

type Props = {
  href: string
  name: string
  className?: string
}

export const OutboundLink: React.FC<Props> = ({ href, name, className }) => (
  <a
    className={classNames("hover:underline", className)}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {name}
  </a>
)
