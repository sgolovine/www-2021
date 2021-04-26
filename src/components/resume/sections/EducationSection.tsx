import React from "react"
import { ResumeEducation } from "~/model/SiteData"
import { SectionHeader } from "../SectionHeader"

type Props = {
  education: ResumeEducation[]
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
}) => {
  return (
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
}

export const EducationSection: React.FC<Props> = ({ education }) => {
  return (
    <div>
      <SectionHeader>Education</SectionHeader>
      <div>
        {education.map((item, i) => {
          return (
            <EducationItem
              key={i}
              name={item.name}
              degree={item.degree}
              gradDate={item.gradDate}
            />
          )
        })}
      </div>
    </div>
  )
}
