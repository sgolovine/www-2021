import React from "react"
import { ExternalLink } from "../common/ExternalLink"

interface Props {
  path: string
  title: string
  date?: string | Date
  description?: string
  external?: boolean
}

export const PostItem: React.FC<Props> = ({
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
      {date && <p>{new Date(date).toLocaleDateString()}</p>}
    </div>
    {description && <p className="py-2">{description}</p>}
  </div>
)
