import React from "react"
import { ResumeEducationData } from "~/model/SiteData"
import { SectionHeader } from "../SectionHeader"

type Props = {
  education: ResumeEducationData[]
}

type EducationItemProps = {
  name: string
  degree: string
  gradDate: string
}

const EducationItem: React.FC<EducationItemProps> = ({
  name,
  degree,
  gradDate,
}) => (
  <div className="py-6">
    <div className="flex flex-row justify-between">
      <p className="text-lg">{name}</p>
      <p className="text-sm">{gradDate}</p>
    </div>
    <div className="m-2">
      <p>{degree}</p>
    </div>
  </div>
)

export const EducationSection: React.FC<Props> = ({ education }) => (
  <div>
    <SectionHeader>Education</SectionHeader>
    <div>
      {education.map((item, i) => (
        <EducationItem
          key={i}
          name={item.college_name}
          degree={item.degree_earned}
          gradDate={item.grad_date}
        />
      ))}
    </div>
  </div>
)
