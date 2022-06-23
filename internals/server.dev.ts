import express from "express"
import compression from "compression"
import { createPageRenderer } from "vite-plugin-ssr"
import { createServer } from "vite"
import defaults from "./defaults"

const adminTemplate = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Content Manager</title>
    </head>
    <body>
      <!-- Include the script that builds the page and powers Netlify CMS -->
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    </body>
  </html>
`

/** Main */
async function main() {
  const app = express()

  // Create dev server
  const devServer = await createServer({
    root: defaults.rootDir,
    server: {
      middlewareMode: "ssr",
    },
  })

  // Create page renderer
  const renderPage = createPageRenderer({
    viteDevServer: devServer,
    isProduction: false,
    root: defaults.rootDir,
  })

  // Set express middlewares
  app.use(compression())
  app.use(devServer.middlewares)

  // Render pages
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl
    if (url === "/admin") {
      res.status(200).type("html").send(adminTemplate)
    }

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
