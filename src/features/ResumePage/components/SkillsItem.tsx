import React from "react"
import { ResumeSkillItem } from "~/model/Resume"
import { Pill } from "./common/Pill"

export const SkillsItem: React.FC<ResumeSkillItem> = ({
  name,
  level,
  keywords,
}) => (
  <div className="pt-4 pb-12">
    <div className="flex flex-row items-center justify-between">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-sm text-gray-400">{level}</p>
    </div>
    <div className="flex flex-row items-center pt-4">
      {keywords.map((keyword, index) => (
        <Pill key={index}>{keyword}</Pill>
      ))}
    </div>
  </div>
)
