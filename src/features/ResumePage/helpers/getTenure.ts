import dayjs from "dayjs"
import { DATE_PRESENT } from "../defines/presentDate"

export function getTenure(startDate: string, endDate: string) {
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
