import classnames from "classnames"
import React from "react"
import { ExternalLink } from "~/components/common/ExternalLink"
import { ProjectType } from "~/model/SiteData"

interface Props {
  name: string
  description: string
  projectType: ProjectType
  url: string
}
export const WorkItem: React.FC<Props> = ({
  name,
  description,
  projectType,
  url,
}) => {
  const typeDotClasses = classnames("h-3", "w-3", "rounded-full", {
    "bg-blue-400": projectType === ProjectType.ProfessionalProject,
    "bg-green-400": projectType === ProjectType.SideProject,
  })

  return (
    <div className="pb-12">
      <div className="flex flex-row items-center justify-between">
        <ExternalLink label={name} href={url} lg external />
        <span className="flex flex-row items-center">
          <span className={typeDotClasses} />
          <p className="text-sm font-bold p-1">
            {projectType === ProjectType.ProfessionalProject
              ? "Professional Project"
              : "Side Project"}
          </p>
        </span>
      </div>
      <p className="py-2">{description}</p>
    </div>
  )
}
