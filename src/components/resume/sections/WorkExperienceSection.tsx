import React from "react"
import { stripHttp } from "~/helpers/stripHttp"
import { ResumeWorkExperience } from "~/model/SiteData"
import { OutboundLink } from "../OutboundLink"
import { SectionHeader } from "../SectionHeader"

type Props = {
  workExperience: ResumeWorkExperience[]
}

type WorkExperienceItemProps = {
  name: string
  position: string
  startDate: string
  endDate: string
  accomplishments: string[]
  url: string
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  name,
  position,
  startDate,
  endDate,
  accomplishments,
  url,
}) => {
  return (
    <div className="py-4">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-lg">{name}</p>
          <p className="text-sm">{position}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <p className="text-sm">{startDate}</p>
            <p className="text-sm">&nbsp;-&nbsp;{endDate}</p>
          </div>
          <OutboundLink className="text-sm" href={url} name={stripHttp(url)} />
        </div>
      </div>
      <ul>
        {accomplishments.map((item, i) => {
          return (
            <li className="p-2 list-disc list-inside" key={i}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const WorkExperienceSection: React.FC<Props> = ({ workExperience }) => {
  return (
    <div>
      <SectionHeader>Work Experience</SectionHeader>
      <div>
        {workExperience.map((item, i) => {
          return (
            <WorkExperienceItem
              key={i}
              name={item.name}
              position={item.position}
              startDate={item.startDate}
              endDate={item.endDate}
              accomplishments={item.accomplishments}
              // TODO: Fix URL
              url={"#"}
            />
          )
        })}
      </div>
    </div>
  )
}
