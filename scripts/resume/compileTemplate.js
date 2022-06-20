/* eslint-disable no-console */
const fs = require("fs")
const Handlebars = require("handlebars")
const glob = require("glob")
const path = require("path")
const dayjs = require("dayjs")

const {
  resumeDataPath,
  templatePath,
  templateOutputDir,
  templateOutputPath,
  templateDir,
} = require("./constants")

const { logError, logInfo } = require("./log")

const DATE_PRESENT = "PRESENT"

function getTenure(startDate, endDate) {
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

function formatData(rawResumeData) {
  const DATE_FORMAT = "MMM YYYY"

  return {
    ...rawResumeData,
    work: rawResumeData.work.map(workItem => {
      const formattedStartDate =
        workItem.startDate === DATE_PRESENT
          ? "Present"
          : dayjs(workItem.startDate).format(DATE_FORMAT)
      const formattedEndDate =
        workItem.endDate === DATE_PRESENT
          ? "Present"
          : dayjs(workItem.endDate).format(DATE_FORMAT)

      const hasSinglePosition = !!(workItem.positions.length === 1)

      const formatPosition = position => {
        const rawStartDate = position.startDate || workItem.startDate
        const rawEndDate = position.endDate || workItem.endDate
        const formattedStartDate =
          rawStartDate === DATE_PRESENT
            ? "Present"
            : dayjs(rawStartDate).format(DATE_FORMAT)
        const formattedEndDate =
          rawEndDate === DATE_PRESENT
            ? "Present"
            : dayjs(rawEndDate).format(DATE_FORMAT)
        return {
          ...position,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          tenure: getTenure(rawStartDate, rawEndDate),
        }
      }

      return {
        ...workItem,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        tenure: getTenure(workItem.startDate, workItem.endDate),
        hasSinglePosition,
        singlePosition: hasSinglePosition
          ? formatPosition(workItem.positions[0])
          : {},
        positions: workItem.positions.map(formatPosition),
      }
    }),
    education: rawResumeData.education.map(educationItem => {
      const formattedStartDate =
        educationItem.startDate === DATE_PRESENT
          ? "Present"
          : dayjs(educationItem.startDate).format(DATE_FORMAT)
      const formattedEndDate =
        educationItem.endDate === DATE_PRESENT
          ? "Present"
          : dayjs(educationItem.endDate).format(DATE_FORMAT)

      return {
        ...educationItem,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      }
    }),
  }
}

function compileTemplate() {
  try {
    const resumeData = fs.readFileSync(resumeDataPath, "utf-8")
    const templateData = fs.readFileSync(templatePath, "utf-8")
    try {
      const parsedResumeData = JSON.parse(resumeData)
      const normalizedResumeData = formatData(parsedResumeData)
      try {
        const handlebarsTemplate = Handlebars.compile(templateData)
        const finalHtml = handlebarsTemplate(normalizedResumeData)
        try {
          /**
           * Checks if the output directory exists
           * If the directory does not exists, it is created
           * If it does exist, it is deleted and recreated.
           */
          if (!fs.existsSync(templateOutputDir)) {
            try {
              fs.mkdirSync(templateOutputDir)
            } catch (e) {
              logError("Could not create template output dir", e)
            }
          }

          /**
           * Write template to output file.
           */
          fs.writeFileSync(templateOutputPath, finalHtml, "utf-8")

          /**
           * Copy CSS to destination directory
           */
          try {
            glob("**/*.css", { cwd: templateDir }, (error, files) => {
              if (error) {
                logError("Could not read CSS files", error)
                process.exit(1)
              }
              files.forEach(file => {
                const srcFilePath = path.resolve(templateDir, file)
                const destFilePath = path.resolve(templateOutputDir, file)
                try {
                  fs.copyFileSync(srcFilePath, destFilePath)
                  logInfo(
                    `Copied ${file} from ${srcFilePath} to ${destFilePath}`
                  )
                } catch (e) {
                  logError("Could not copy file", e)
                }
              })
            })
          } catch (e) {
            logError("Could not copy CSS", e)
          }

          logInfo(`Wrote file to ${templateOutputPath}`)
        } catch (e) {
          logError("Could not write output file", e)
        }
      } catch (e) {
        logError("Could not compile handlebars template", e)
      }
    } catch (e) {
      logError("Could not parse template data", e)
    }
  } catch (e) {
    logError("Could not read template data", e)
  }
}

module.exports = compileTemplate
