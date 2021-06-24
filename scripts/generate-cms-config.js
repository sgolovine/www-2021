/**
 * Storing a large NetlifyCMS config in a single file can
 * messy very quickly. This script combines all the yml files
 * from `static/admin/_config` into a single config file
 * that is written to `static/admin/config.yml` as required
 * by NetlifyCMS
 */

require("dotenv").config()
const path = require("path")
const merge = require("@alexlafroscia/yaml-merge")
const fs = require("fs")

const configRoot = path.resolve(__dirname, "..", "static", "admin", "_config")
const outputPath = path.resolve(
  __dirname,
  "..",
  "static",
  "admin",
  "config.yml"
)

const devBackendPath = path.resolve(configRoot, "backend_dev.yml")
const prodBackendPath = path.resolve(configRoot, "backend_prod.yml")

const baseConfigPath = path.resolve(configRoot, "base.yml")
const siteDataConfigPath = path.resolve(configRoot, "site_data.yml")
const resumeDataConfigPath = path.resolve(configRoot, "resume_data.yml")

;(function () {
  console.log("🚚 Generating CMS configuration file")
  console.log(`Mode: ${process.env.NODE_ENV}`)

  const backend =
    process.env.NODE_ENV === "production" ? prodBackendPath : devBackendPath

  const output = merge(
    backend,
    baseConfigPath,
    siteDataConfigPath,
    resumeDataConfigPath
  )

  try {
    console.log(`✍️ Writing config file to ${outputPath}`)
    fs.writeFileSync(outputPath, output)
  } catch (e) {
    console.log("❌ An error occurred writing the file")
    console.error(e)
  } finally {
    console.log("✅ Successfully Wrote Config File")
  }
})()
