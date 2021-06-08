import React from "react"
import { SiteWork } from "~/model/SiteData"
import { ExternalLink } from "../common/ExternalLink"

const Item: React.FC<{ work: SiteWork }> = ({ work }) => (
  <div className="pb-8">
    <ExternalLink external label={work.name} href={work.url} />
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
