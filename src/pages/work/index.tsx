import React from "react"
import classnames from "classnames"
import { Header } from "~/components/common/Typography"
import { useData } from "~/hooks/useData"
import { SiteWorkData } from "~/model/SiteData"
import { ExternalLink } from "~/components/common/ExternalLink"
import { withMainLayout } from "~/components/layout"

const WorkPage = () => {
  const { siteData } = useData()

  const renderWorkItem = (item: SiteWorkData) => {
    const containerClasses = classnames("flex", "flex-row", "items-center")

    const typeTextClasses = classnames("text-sm", "font-bold", "p-1")

    const typeDotClasses = classnames("h-3", "w-3", "rounded-full", {
      "bg-blue-400": item.project_type === "professional",
      "bg-green-400": item.project_type === "side-project",
    })

    return (
      <div className="pb-12">
        <div className={classnames(containerClasses, "justify-between")}>
          <ExternalLink label={item.name} href={item.url} lg external />
          <span className={containerClasses}>
            <span className={typeDotClasses} />
            <p className={typeTextClasses}>
              {item.project_type === "professional"
                ? "Professional Project"
                : "Side Project"}
            </p>
          </span>
        </div>
        <p className="py-2">{item.description}</p>
      </div>
    )
  }

  return (
    <>
      <Header>Work</Header>
      <div>
        {siteData.work_data.map((item, index) => (
          <div key={index}>{renderWorkItem(item)}</div>
        ))}
      </div>
    </>
  )
}

export default withMainLayout(WorkPage)
