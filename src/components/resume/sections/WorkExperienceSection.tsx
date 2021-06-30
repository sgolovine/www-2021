import React from "react"
import { stripHttp } from "~/helpers/stripHttp"
import { ResumeWorkExperienceData } from "~/model/SiteData"
import { OutboundLink } from "../OutboundLink"
import { SectionHeader } from "../SectionHeader"

type Props = {
  workExperience: ResumeWorkExperienceData[]
}

export const WorkExperienceSection: React.FC<Props> = ({ workExperience }) => (
  <div>
    <SectionHeader>Work Experience</SectionHeader>
    <div>
      {workExperience.map(item => {
        const endDate = item.current_employer ? "Present" : item.end_date
        return (
          <div className="py-4">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-lg">{item.name}</p>
                <p className="text-sm">{item.position}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row">
                  <p className="text-sm">{item.start_date}</p>
                  <p className="text-sm">&nbsp;-&nbsp;{endDate}</p>
                </div>
                <OutboundLink
                  className="text-sm"
                  href={item.url}
                  name={stripHttp(item.url)}
                />
              </div>
            </div>
            <ul>
              {item.accomplishments.map((item, i) => (
                <li className="p-2 list-disc list-inside" key={i}>
                  {item.accomplishment}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  </div>
)
