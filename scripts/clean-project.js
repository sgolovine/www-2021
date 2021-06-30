// Clean script
// Run `yarn clean` to run this script

const fs = require("fs")
const path = require("path")

const projectRoot = path.resolve(__dirname, "..")
const cachePath = path.resolve(projectRoot, ".cache")
const nodeModulesPath = path.resolve(projectRoot, "node_modules")
const yarnErrorLogPath = path.resolve(projectRoot, "yarn-error.log")
const publicPath = path.resolve(projectRoot, "public")
const resumeDistPath = path.resolve(projectRoot, "resume-dist")

function deleteDir(dirName, dirPath) {
  try {
    console.info(`Deleting ${dirName}`)
    fs.rmdirSync(dirPath, { recursive: true })
  } catch (e) {
    console.error(`Error deleting ${dirName}`)
    console.error(e)
  }
}

;(() => {
  deleteDir(".cache", cachePath)
  deleteDir("node_modules", nodeModulesPath)
  deleteDir("yarn-error.log", yarnErrorLogPath)
  deleteDir("public", publicPath)
  deleteDir("resume-dist", resumeDistPath)
})()
