import React from "react"
import dayjs from "dayjs"
import classNames from "classnames"
import { withNewLayout } from "~/components/layout"
import { ResumeWorkItem } from "~/model/Resume"
import { DATE_PRESENT } from "./defines/presentDate"
import { useResumeData } from "./hooks/useResumeData"

function getTenure(startDate: string, endDate: string) {
  const MS_IN_HR = 3600000
  const HRS_IN_DAY = 24
  const DAYS_IN_MONTH = 31
  const MONTHS_IN_YR = 12

  const actualStartDate =
    startDate === DATE_PRESENT ? dayjs() : dayjs(startDate)
  const actualEndDate = endDate === DATE_PRESENT ? dayjs() : dayjs(endDate)
  const elapsedMs = actualEndDate.diff(actualStartDate)
  const elapsedHrs = elapsedMs / MS_IN_HR
  const elapsedDays = Math.floor(elapsedHrs / HRS_IN_DAY)
  // Total number of months in the period
  const elapsedMonths = Math.floor(elapsedDays / DAYS_IN_MONTH)

  const years = Math.floor(elapsedMonths / MONTHS_IN_YR)
  const residualMonths = elapsedMonths % MONTHS_IN_YR

  if (years === 0) {
    return `${residualMonths} mos`
  }
  return `${years} yrs ${residualMonths} mos`
}

function getTimePeriod(startDate: string, endDate: string) {
  const formattedStartDateString =
    startDate === DATE_PRESENT ? "Present" : dayjs(startDate).format("MMM YYYY")
  const formattedEndDateString =
    endDate === DATE_PRESENT ? "Present" : dayjs(endDate).format("MMM YYYY")

  return `${formattedStartDateString} - ${formattedEndDateString}`
}

const WorkItem = ({
  name,
  url,
  startDate,
  endDate,
  positions,
}: ResumeWorkItem) => {
  const positionsUI = positions.length > 1
  const singlePosition = positions[0]
  const formattedDate = getTimePeriod(startDate, endDate)

  const tenure = getTenure(startDate, endDate)

  const renderName = () => {
    const classes = classNames("text-xl", "font-bold")

    if (!positionsUI) {
      return <p className={classes}>{singlePosition.position}</p>
    }
    if (url) {
      return (
        <a href={url}>
          <p className={classes}>{name}</p>
        </a>
      )
    }
    return <p className={classes}>{name}</p>
  }

  const renderMultiPositions = () => (
    <>
      {positions.map((position, index) => {
        const timePeriod = getTimePeriod(
          position.startDate ?? startDate,
          position.endDate ?? endDate
        )
        const tenure = getTenure(
          position.startDate ?? startDate,
          position.endDate ?? endDate
        )

        const borderColors = [
          ...(index === 0 ? ["border-green-400"] : ""),
          ...(index === 1 ? ["border-blue-400"] : ""),
          ...(index === 2 ? ["border-lime-400"] : ""),
          ...(index === 3 ? ["border-orange-400"] : ""),
          ...(index === 4 ? ["border-yellow-400"] : ""),
          ...(index === 5 ? ["border-teal-400"] : ""),
        ]

        const borderClassnames = classNames(
          "my-4",
          "ml-2",
          "pl-4",
          "border-l-2",
          ...borderColors
        )

        return (
          <div key={index} className={borderClassnames}>
            <div className="flex flex-row items-center justify-between">
              <p className="text-lg font-bold">{position.position}</p>
              <p className="text-sm text-gray-400">{timePeriod}</p>
            </div>
            <p className="text-sm text-gray-400">{tenure}</p>
            <div className="pt-2">
              {position.summary.map((summaryItem, index) => (
                <p key={index} className="text-sm my-2">
                  {summaryItem}
                </p>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )

  const renderSinglePosition = () => {
    const timePeriod = getTimePeriod(
      singlePosition.startDate ?? startDate,
      singlePosition.endDate ?? endDate
    )

    const tenure = getTenure(
      singlePosition.startDate ?? startDate,
      singlePosition.endDate ?? endDate
    )

    return (
      <div className="my-4">
        {/* <div className="flex flex-row items-center justify-between"> */}
        {/* <p className="text-lg font-bold">{singlePosition.position}</p> */}
        {/* <p className="text-sm text-gray-400">{timePeriod}</p> */}
        {/* </div> */}
        {/* <p className="text-sm text-gray-400">{tenure}</p> */}
        <div>
          {singlePosition.summary.map((summaryItem, index) => (
            <p key={index} className="text-sm my-2">
              {summaryItem}
            </p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="pt-4 pb-12">
      <div className="flex flex-row items-center justify-between">
        {renderName()}
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      {!positionsUI && <p className="font-medium">{name}</p>}
      <p className="text-sm text-gray-400">{tenure}</p>
      <div className="pt-2">
        {positionsUI ? renderMultiPositions() : renderSinglePosition()}
      </div>
    </div>
  )
}

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
