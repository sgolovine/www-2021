import React from "react"
import { WorkItem } from "~/components/work/WorkItem"
import { SiteWorkData } from "~/model/SiteData"
import { ContentContainer, PageHeader } from "~/components/layout"

export interface WorkPageProps {
  work: SiteWorkData[]
}

const WorkPage: React.FC<WorkPageProps> = ({ work }) => (
  <>
    <PageHeader title="Work" />
    <ContentContainer>
      {work.map((item, index) => (
        <WorkItem
          key={index}
          name={item.name}
          description={item.description}
          project_type={item.project_type}
          url={item.url}
        />
      ))}
    </ContentContainer>
  </>
)

export default WorkPage
