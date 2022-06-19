/* eslint-disable no-console */
const fs = require("fs")
const Handlebars = require("handlebars")
const glob = require("glob")
const path = require("path")

const {
  resumeDataPath,
  templatePath,
  templateOutputDir,
  templateOutputPath,
  templateDir,
} = require("./constants")

const { logError } = require("./log")

function compileTemplate() {
  try {
    const resumeData = fs.readFileSync(resumeDataPath, "utf-8")
    const templateData = fs.readFileSync(templatePath, "utf-8")
    try {
      const parsedResumeData = JSON.parse(resumeData)
      try {
        const handlebarsTemplate = Handlebars.compile(templateData)
        const finalHtml = handlebarsTemplate(parsedResumeData)
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
                  console.log(
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

          console.log(`Wrote file to ${templateOutputPath}`)
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
    logError("Could not parse template data", e)
  }
}

module.exports = compileTemplate
