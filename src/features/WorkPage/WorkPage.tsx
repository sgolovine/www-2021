import React from "react"
import { withNewLayout } from "~/components/__legacy__/withLayout"
import { WorkItem } from "~/components/work/WorkItem"
import { SiteWorkData } from "~/model/SiteData"
import { ContentContainer, PageHeader } from "~/components/layout/page"

interface Props {
  work: SiteWorkData[]
}

const WorkPage: React.FC<Props> = ({ work }) => (
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

export default withNewLayout(WorkPage)
