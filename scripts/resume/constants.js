const path = require("path")

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

module.exports = {
  resumeDataPath,
  templatePath,
  templateOutputDir,
  templateOutputPath,
  templateDir,
}
