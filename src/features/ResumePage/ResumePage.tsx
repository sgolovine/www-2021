import React from "react"
import { withNewLayout } from "~/components/layout"
import { useResumeData } from "./hooks/useResumeData"
import { WorkItem } from "./components/WorkItem"
import { ProjectItem } from "./components/ProjectItem"
import { EducationItem } from "./components/EducationItem"
import { ControlSubheader } from "./components/ControlSubheader"
import { SkillsItem } from "./components/SkillsItem"

const ResumePage: React.FC = () => {
  const { data } = useResumeData()

  return (
    <>
      <ControlSubheader />
      <div className="max-w-3xl mx-auto my-4">
        <div>
          <h1 className="text-3xl">{data.basics.name}</h1>
          <p className="text-sm pt-2">{data.basics.label}</p>
          <p className="text-sm text-gray-400 pt-1">
            {data.basics.location.city}, {data.basics.location.region}
          </p>
        </div>
        <div className="py-4 pt-6">
          <h2 className="text-2xl">Summary</h2>
          <div className="pt-4 pb-12">
            <p>{data.basics.summary}</p>
          </div>
        </div>

        <div className="py-4">
          <h2 className="text-2xl">Work</h2>
          {data.work.map((workItem, index) => (
            <WorkItem
              key={index}
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
          <div className="py-4">
            {data.projects.map((item, index) => (
              <ProjectItem
                key={index}
                name={item.name}
                description={item.description}
                highlights={item.highlights}
                keywords={item.keywords}
              />
            ))}
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-2xl">Skills</h2>
          {data.skills.map((skillsItem, index) => (
            <SkillsItem
              key={index}
              name={skillsItem.name}
              level={skillsItem.level}
              keywords={skillsItem.keywords}
            />
          ))}
        </div>
        <div className="py-4">
          <h2 className="text-2xl">Education</h2>
          <div className="py-4">
            {data.education.map((item, index) => (
              <EducationItem
                key={index}
                institution={item.institution}
                url={item.url}
                area={item.area}
                studyType={item.studyType}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default withNewLayout(ResumePage, true)
