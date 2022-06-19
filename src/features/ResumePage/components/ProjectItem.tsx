import React from "react"
import { ResumeProjectsItem } from "~/model/Resume"
import { Pill } from "./common/Pill"

export const ProjectItem: React.FC<ResumeProjectsItem> = ({
  name,
  description,
  highlights,
  keywords,
}) => (
  <div className="pt-4 pb-12">
    <p className="text-xl font-bold">{name}</p>
    <p>{description}</p>
    <div className="pt-4">
      {highlights.map((highlight, index) => (
        <p className="pl-2 py-1 text-sm" key={index}>
          {highlight}
        </p>
      ))}
    </div>
    <div className="flex flex-row items-center pt-4">
      {keywords.map((keyword, index) => (
        <Pill key={index}>{keyword}</Pill>
      ))}
    </div>
  </div>
)
