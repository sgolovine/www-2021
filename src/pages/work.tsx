import React from "react"
import { Header } from "~/components/common/Typography"
import { useData } from "~/hooks/useData"
import { withMainLayout } from "~/components/layout"
import { WorkItem } from "~/components/work/WorkItem"

const WorkPage = () => {
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
          // <div key={index}>{renderWorkItem(item)}</div>
        ))}
      </div>
    </>
  )
}

export default withMainLayout(WorkPage)
