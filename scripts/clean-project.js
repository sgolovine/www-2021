/**
 * This script will clean out all the temporary
 * files and folders inside this project.
 *
 * This script will delete the following:
 * - .cache
 * - node_modules
 * - yarn-error.log
 * - public
 * - resume-dist
 *
 * The script will also run `gatsby clean` at the end
 * To delete any temp files outside of this project folder
 */

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

;(function () {
  deleteDir(".cache", cachePath)
  deleteDir("node_modules", nodeModulesPath)
  deleteDir("yarn-error.log", yarnErrorLogPath)
  deleteDir("public", publicPath)
  deleteDir("resume-dist", resumeDistPath)
})()
