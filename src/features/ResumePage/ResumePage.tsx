import React from "react"
import { withNewLayout } from "~/components/layout"
import { useResumeData } from "./hooks/useResumeData"
import { WorkItem } from "./components/WorkItem"

const ResumePage: React.FC = () => {
  const { data } = useResumeData()

  return (
    <div>
      <div>
        <h1 className="text-3xl">{data.basics.name}</h1>
        <p className="text-sm pt-2">{data.basics.label}</p>
        <p className="text-sm text-gray-400 pt-1">
          {data.basics.location.city}, {data.basics.location.region}
        </p>
      </div>
      <div className="py-4">
        <h2 className="text-2xl">Summary</h2>
        <p>{data.basics.summary}</p>
      </div>
      <div className="py-4">
        <h2 className="text-2xl">Work</h2>
        {data.work.map(workItem => (
          <WorkItem
            name={workItem.name}
            startDate={workItem.startDate}
            endDate={workItem.endDate}
            url={workItem.url}
            positions={workItem.positions}
          />
        ))}
      </div>
      <div className="py-4">
        <h2 className="text-2xl">Projects</h2>
      </div>
      <div className="py-4">
        <h2 className="text-2xl">Education</h2>
      </div>
    </div>
  )
}

export default withNewLayout(ResumePage)
