import classNames from "classnames"
import React from "react"
import { ResumeEducationItem } from "~/model/Resume"
import { getTimePeriod } from "../helpers/getTimePeriod"

export const EducationItem: React.FC<ResumeEducationItem> = ({
  institution,
  url,
  area,
  studyType,
  startDate,
  endDate,
}) => {
  const formattedDate = getTimePeriod(startDate, endDate)

  const renderName = () => {
    const classes = classNames("text-xl", "font-bold")
    if (url) {
      return (
        <a href={url}>
          <p className={classes}>{institution}</p>
        </a>
      )
    }
    return <p className={classes}>{institution}</p>
  }

  return (
    <div className="pt-4 pb-12">
      <div className="flex flex-row items-center justify-between">
        <p>{renderName()}</p>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="text-sm text-gray-400">{`${studyType} - ${area}`}</p>
    </div>
  )
}
