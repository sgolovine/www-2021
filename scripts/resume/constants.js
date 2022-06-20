const path = require("path")
const dayjs = require("dayjs")

const resumeDataPath = path.resolve(
  process.cwd(),
  "static",
  "resume",
  "resume.json"
)

const templateDir = path.resolve(process.cwd(), "resume")

const templatePath = path.resolve(
  process.cwd(),
  "resume",
  "template.handlebars"
)

const templateOutputDir = path.resolve(process.cwd(), ".resume-dist")
const templateOutputPath = path.resolve(templateOutputDir, "index.html")

// Where the PDF is exported to
const dateStamp = dayjs().format("MM_DD_YY")
const documentOutDir = path.resolve(
  process.cwd(),
  "static",
  "doc",
  `resume_${dateStamp}.pdf`
)

module.exports = {
  resumeDataPath,
  templatePath,
  templateOutputDir,
  templateOutputPath,
  templateDir,
  documentOutDir,
}
