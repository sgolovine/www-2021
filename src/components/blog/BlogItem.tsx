import React from "react"
import { formatPostDate } from "~/helpers/formatPostDate"
import { ExternalLink } from "../common/ExternalLink"

interface Props {
  path: string
  title: string
  date: string | Date
  description: string
  external?: boolean
}

export const BlogItem: React.FC<Props> = ({
  path,
  title,
  date,
  description,
  external,
}) => (
  <div className="pb-12">
    <div className="flex flex-row justify-between items-start">
      <ExternalLink
        lg
        noIcon={external}
        external={external}
        href={path}
        label={title}
      />
      <p>{formatPostDate(date)}</p>
    </div>
    <p className="py-2">{description}</p>
  </div>
)
