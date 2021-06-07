import React from "react"
import { Header } from "~/components/common/Typography"
import { useData } from "~/hooks/useData"
import classnames from "classnames"
import { ExternalLinkIcon } from "~/icons/ExternalLink"
import { SiteWork } from "~/model/SiteData"

const WorkPage = () => {
  const { siteData } = useData()
  const { work } = siteData

  const renderWorkItem = (item: SiteWork) => {
    const containerClasses = classnames("flex", "flex-row", "items-center")
    const headerTextClasses = classnames(
      "text-lg",
      "font-bold",
      "text-brand-green"
    )
    const iconClasses = classnames("h-6", "w-6", "ml-2", "text-brand-green")

    const typeTextClasses = classnames("text-sm", "font-bold", "p-1")

    const typeDotClasses = classnames("h-3", "w-3", "rounded-full", {
      "bg-blue-400": item.type === "professional",
      "bg-green-400": item.type === "side-project",
    })

    return (
      <div className="pb-12">
        <div className={classnames(containerClasses, "justify-between")}>
          {item.url ? (
            <span className={containerClasses}>
              <a
                className={classnames(headerTextClasses, "hover:underline")}
                href={item.url}
              >
                {item.name}
              </a>
              <ExternalLinkIcon className={iconClasses} />
            </span>
          ) : (
            <p className={headerTextClasses}>{item.name}</p>
          )}
          <span className={containerClasses}>
            <span className={typeDotClasses} />
            <p className={typeTextClasses}>
              {item.type === "professional"
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
        {work.map((item, index) => {
          return <div key={index}>{renderWorkItem(item)}</div>
        })}
      </div>
    </>
  )
}

export default WorkPage
