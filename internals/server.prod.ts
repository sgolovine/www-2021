import express from "express"
import compression from "compression"
import { createPageRenderer } from "vite-plugin-ssr"
import path from "path"
import defaults from "./defaults"

const prodStaticPath = path.resolve(defaults.rootDir, "dist", "client")

function main() {
  const app = express()
  app.use(compression())
  app.use(express.static(prodStaticPath))

  const renderPage = createPageRenderer({
    isProduction: true,
    root: defaults.rootDir,
  })

  // Render pages
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl
    const { httpResponse } = await renderPage({ url })

    if (!httpResponse) {
      return next()
    }

    res
      .status(httpResponse.statusCode)
      .type(httpResponse.contentType)
      .send(httpResponse.body)
  })

  app.listen(defaults.port)
  console.log(`Server running at http://localhost:${defaults.port}`)
}

main()
