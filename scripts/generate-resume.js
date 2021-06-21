/**
 * This script generates a PDF resume
 */

const puppeteer = require("puppeteer")
const path = require("path")
const fs = require("fs")

// Path to where resume will be stored
const outputPath = path.resolve(__dirname, "..", "static", "doc", "resume.pdf")
// Dev server path
const devServerPath = `http://localhost:5000`

;(async function () {
  // Open the browser
  const browser = await puppeteer.launch({ headless: true })

  // Open the page
  const page = await browser.newPage()
  await page.goto(devServerPath, {
    waitUntil: "networkidle0",
  })

  // Generate the PDF and keep in memory as a blob
  const pdf = await page.pdf({ format: "a4" })

  // Close the browser
  await browser.close()

  // Write the blob to a file
  fs.writeFileSync(outputPath, pdf)

  // Print the exit message
  console.log(
    "Resume export complete!. Press CTRL+C to exit then commit the changes"
  )

  // Exit the program
  process.exit(0)
})()
