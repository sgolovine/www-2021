/**
 * This script will generate a `version.json`
 * file that is placed in `public/version.json`
 *
 * The file contains two keys:
 * - version - the latest version from package.json
 * - commit - the latest commit from git
 *
 */
const logger = require("./helpers/log")
const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")

const packageJsonPath = path.resolve(process.cwd(), "package.json")
const versionConfigPath = path.resolve(process.cwd(), "public", "version.json")

// MAIN
;(() => {
  logger.build("Generating version")

  // Fetch package.json version
  const packageJsonFile = fs.readFileSync(packageJsonPath, "utf-8")
  const parsedPackageJson = JSON.parse(packageJsonFile)
  logger.success(`Found version: ${parsedPackageJson.version}`)

  // Fetch latest commit
  logger.build("Fetching latest commit")
  exec("git rev-parse HEAD", (err, stdout, stderr) => {
    if (err) {
      logger.error("Error getting git commit", err)
    }
    if (stderr) {
      logger.error("Standard error getting git commit", err)
    }
    logger.success(`Found latest commit: ${stdout}`)

    // Write to config file
    const JSONData = JSON.stringify(
      {
        version: parsedPackageJson.version,
        commit: stdout.replace("\n", ""),
      },
      null,
      2
    )

    logger.write(`Writing to ${versionConfigPath}`)

    fs.writeFileSync(versionConfigPath, JSONData)

    logger.success("Successfully wrote config file")
  })
})()
