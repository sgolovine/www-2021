import { escapeInject } from "vite-plugin-ssr"

export async function render() {
  const html = escapeInject`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
      </head>
    </html>
  `

  return html
}
