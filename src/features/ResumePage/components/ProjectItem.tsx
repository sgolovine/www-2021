import React from "react"
import { ResumeProjectsItem } from "~/model/Resume"

export const ProjectItem: React.FC<ResumeProjectsItem> = ({
  name,
  description,
  highlights,
  keywords,
}) => (
  <div className="pb-12">
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
        <p
          key={index}
          className="mx-2 py-1 px-2 bg-gray-600 rounded-full text-sm font-bold"
        >
          {keyword}
        </p>
      ))}
    </div>
  </div>
)
