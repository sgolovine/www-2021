/* eslint-disable no-console */
const nodeHttpServer = require("node-http-server")
const puppeteer = require("puppeteer")
const compileTemplate = require("./compileTemplate")
const { templateOutputDir, documentOutDir } = require("./constants")
const { logInfo } = require("./log")

const exportOptions = {
  path: documentOutDir,
  scale: 0.75,
  displayHeaderFooter: false,
  printBackground: true,
  landscape: false,
  format: "LEGAL",
}

logInfo("Building resume to a PDF")

// Step 1: Compile the template
logInfo("Compiling template")
compileTemplate()

// Step 2: Start the dev server for puppeteer
logInfo("Starting nodeHttpServer")
nodeHttpServer.deploy(
  {
    port: 9090,
    root: templateOutputDir,
  },
  async () => {
    // Step 3: Once the server is ready, start up an instance of puppeteer
    logInfo("Starting Puppeteer")

    const browser = await puppeteer.launch({ headless: "true" })
    const page = await browser.newPage()

    await page.goto("http://localhost:9090", { waitUntil: "networkidle0" })
    await page.pdf(exportOptions)
    await page.close()

    logInfo(`Successfully build resume to: ${documentOutDir}`)
    process.exit(0)
  }
)
