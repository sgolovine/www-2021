import React from "react"
import { WorkItem } from "~/components/work/WorkItem"
import { ContentContainer, PageHeader } from "~/components/layout"
import { SiteData } from "~/model/SiteData"

export interface WorkPageProps {
  siteData: SiteData
}

const WorkPage: React.FC<WorkPageProps> = ({ siteData }) => (
  <>
    <PageHeader title="Work" />
    <ContentContainer>
      {siteData.work.map((item, index) => (
        <WorkItem
          key={index}
          name={item.name}
          description={item.description}
          projectType={item.projectType}
          url={item.url}
        />
      ))}
    </ContentContainer>
  </>
)

export default WorkPage
