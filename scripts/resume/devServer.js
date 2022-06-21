/* eslint-disable no-console */
const fs = require("fs")
const nodeHttpServer = require("node-http-server")
const { templatePath, templateOutputDir, templateDir } = require("./constants")
const compileTemplate = require("./compileTemplate")
const { logInfo } = require("./log")

const PORT = process.env.PORT || 4000

logInfo(`Watching ${templatePath} for changes`, "DEV_SERVER")

// When the server starts. Compile the template
// The first time here. Afterwards we compile based on file changes
compileTemplate()

fs.watch(templateDir, (_, filename) => {
  logInfo(`[${filename}] Change Detected. Rebuilding`, "DEV_SERVER")
  compileTemplate()
})

function serverReady(server) {
  logInfo(`Running on ${server.config.port}`, "DEV_SERVER")
}

nodeHttpServer.deploy(
  {
    port: PORT,
    root: templateOutputDir,
  },
  serverReady
)
