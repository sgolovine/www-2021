import React from "react"
import { SiteWork, SiteWorkData } from "~/model/SiteData"
import { ExternalLink } from "../common/ExternalLink"

export const RecentWork: React.FC<{ recentWork: SiteWorkData[] }> = ({
  recentWork,
}) => {
  return (
    <>
      {recentWork.map((item, index) => {
        return (
          <div className="pb-8" key={index}>
            <ExternalLink external label={item.name} href={item.url} />
            <p className="leading-relaxed">{item.description}</p>
          </div>
        )
      })}
    </>
  )
}
