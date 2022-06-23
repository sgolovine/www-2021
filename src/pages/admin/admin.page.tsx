import { escapeInject } from "vite-plugin-ssr"

const page = escapeInject`
  <!DOCTYPE html>
    <h1>Admin Route</h1>
  </html>
`

export default page
