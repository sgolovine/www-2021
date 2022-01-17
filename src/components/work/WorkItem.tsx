import classnames from "classnames"
import React from "react"
import { SiteWorkData } from "~/model/SiteData"
import { ExternalLink } from "~/components/common/ExternalLink"

type Props = Pick<SiteWorkData, "name" | "description" | "project_type" | "url">

export const WorkItem: React.FC<Props> = ({
  name,
  description,
  project_type,
  url,
}) => {
  const typeDotClasses = classnames("h-3", "w-3", "rounded-full", {
    "bg-blue-400": project_type === "professional",
    "bg-green-400": project_type === "side-project",
  })
  return (
    <div className="pb-12">
      <div className="flex flex-row items-center justify-between">
        <ExternalLink label={name} href={url} lg external />
        <span className="flex flex-row items-center">
          <span className={typeDotClasses} />
          <p className="text-sm font-bold p-1">
            {project_type === "professional"
              ? "Professional Project"
              : "Side Project"}
          </p>
        </span>
      </div>
      <p className="py-2">{description}</p>
    </div>
  )
}
