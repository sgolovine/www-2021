import React from "react"
import { ResumeSkillsData } from "~/model/SiteData"
import { SectionHeader } from "../SectionHeader"

type Props = {
  skills: ResumeSkillsData[]
}

export const SkillsSection: React.FC<Props> = ({ skills }) => {
  return (
    <div>
      <SectionHeader>Core Qualifications</SectionHeader>
      {skills.map((skill, i) => {
        return (
          <p key={i} className="py-4">
            {skill.skill}
          </p>
        )
      })}
    </div>
  )
}
