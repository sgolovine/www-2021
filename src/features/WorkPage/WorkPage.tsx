import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { WorkItem } from "~/components/work/WorkItem"
import { useData } from "~/hooks/useData"

const WorkPage: React.FC = () => {
  const { siteData } = useData()

  return (
    <>
      <Header>Work</Header>
      <div>
        {siteData.work_data.map((item, index) => (
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
}

export default withMainLayout(WorkPage)
