/* eslint-disable no-console */
const fs = require("fs")
const nodeHttpServer = require("node-http-server")
const { templatePath, templateOutputDir, templateDir } = require("./constants")
const compileTemplate = require("./compileTemplate")

const PORT = process.env.PORT || 4000

console.log(`Watching ${templatePath} for changes`)

// When the server starts. Compile the template
// The first time here. Afterwards we compile based on file changes
compileTemplate()

fs.watch(templateDir, (_, filename) => {
  console.log(`[${filename}] Change Detected. Rebuilding`)
  compileTemplate()
})

function serverReady(server) {
  console.log(`Dev Server Running on ${server.config.port}`)
}

nodeHttpServer.deploy(
  {
    port: PORT,
    root: templateOutputDir,
  },
  serverReady
)
