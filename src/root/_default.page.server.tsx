import ReactDOMServer from "react-dom/server"
import React from "react"
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr"
import type { PageContext } from "./types"
import { ROOT_EL } from "./defaults"

// ts-prune-ignore-next
export const passToClient = ["pageProps", "urlPathname"]

/** Main */
// ts-prune-ignore-next
export async function render({ Page, pageProps, documentProps }: PageContext) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />)

  const title = documentProps?.title ?? "Placeholder page title"

  const desc = documentProps?.description ?? "Placeholder page meta description"

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="${ROOT_EL}">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
