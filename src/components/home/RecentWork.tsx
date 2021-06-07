import React from "react"
import { ExternalLinkIcon } from "~/icons/ExternalLink"
import { SiteWork } from "~/model/SiteData"

const Item: React.FC<{ work: SiteWork }> = ({ work }) => (
  <div className="pb-8">
    {work.url ? (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={work.url}
        className="flex text-brand-green font-bold flex-row hover:underline"
      >
        <span className="pr-2">{work.name}</span>
        <ExternalLinkIcon />
      </a>
    ) : (
      <p className="pr-2 text-brand-green font-bold">{work.name}</p>
    )}
    <p className="leading-relaxed">{work.description}</p>
  </div>
)

export const RecentWork: React.FC<{ recentWork: SiteWork[] }> = ({
  recentWork,
}) => {
  return (
    <>
      {recentWork.map((item, index) => {
        return <Item work={item} key={index} />
      })}
    </>
  )
}
