import React from "react"
import { stripHttp } from "~/helpers/stripHttp"
import { ResumeSideProjectsData } from "~/model/SiteData"
import { OutboundLink } from "../OutboundLink"
import { SectionHeader } from "../SectionHeader"

type Props = {
  sideProjects: ResumeSideProjectsData[]
}

type SideProjectItemProps = {
  name: string
  link?: string
  startDate: string
  endDate: string
  description: string
  type: string
}

const SideProjectItem: React.FC<SideProjectItemProps> = ({
  name,
  link,
  startDate,
  endDate,
  description,
  type,
}) => (
    <div className="py-4">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-lg">{name}</p>
          <p className="text-sm">{type}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <p className="text-sm">{startDate}</p>
            <p className="text-sm">&nbsp;-&nbsp;{endDate}</p>
          </div>
          {link && (
            <OutboundLink
              name={stripHttp(link)}
              href={link}
              className="text-sm"
            />
          )}
        </div>
      </div>
      <div className="p-2">
        <p>{description}</p>
      </div>
    </div>
  )

export const SideProjectsSection: React.FC<Props> = ({ sideProjects }) => (
    <div>
      <SectionHeader>Side Projects</SectionHeader>
      <div>
        {sideProjects.map((item, index) => (
            <SideProjectItem
              key={index}
              name={item.name}
              link={item.link}
              startDate={item.start_date}
              endDate={item.end_date}
              description={item.description}
              type={item.type}
            />
          ))}
      </div>
    </div>
  )
