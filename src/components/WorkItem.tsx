import React from "react"
import { ExternalLinkIcon } from "~/icons/ExternalLink"
import { SiteWork } from "~/model/SiteData"

interface Props {
  work: SiteWork
}

export const WorkItem: React.FC<Props> = ({ work }) => (
  <div className="pb-8">
    {work.url ? (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={work.url}
        className="flex text-brand-blue font-bold flex-row hover:underline"
      >
        <span className="pr-2">{work.name}</span>
        <ExternalLinkIcon />
      </a>
    ) : (
      <p className="pr-2 text-brand-blue font-bold">{work.name}</p>
    )}
    <p className="leading-relaxed">{work.description}</p>
  </div>
)
