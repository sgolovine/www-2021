import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { WorkItem } from "~/components/work/WorkItem"
import { SiteWorkData } from "~/model/SiteData"

interface Props {
  work: SiteWorkData[]
}

const WorkPage: React.FC<Props> = ({ work }) => (
  <>
    <Header title="Work" />
    <div>
      {work.map((item, index) => (
        <WorkItem
          key={index}
          name={item.name}
          description={item.description}
          project_type={item.project_type}
          url={item.url}
        />
      ))}
    </div>
  </>
)

export default withNewLayout(WorkPage)
