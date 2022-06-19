import dayjs from "dayjs"
import { DATE_PRESENT } from "../defines/presentDate"

export function getTimePeriod(startDate: string, endDate: string) {
  const formattedStartDateString =
    startDate === DATE_PRESENT ? "Present" : dayjs(startDate).format("MMM YYYY")
  const formattedEndDateString =
    endDate === DATE_PRESENT ? "Present" : dayjs(endDate).format("MMM YYYY")

  return `${formattedStartDateString} - ${formattedEndDateString}`
}
