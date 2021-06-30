import React from "react"
import { ResumeSkillsData } from "~/model/SiteData"
import { SectionHeader } from "../SectionHeader"

type Props = {
  skills: ResumeSkillsData[]
}

export const SkillsSection: React.FC<Props> = ({ skills }) => (
    <div>
      <SectionHeader>Core Qualifications</SectionHeader>
      {skills.map((skill, i) => (
          <p key={i} className="py-4">
            {skill.skill}
          </p>
        ))}
    </div>
  )
