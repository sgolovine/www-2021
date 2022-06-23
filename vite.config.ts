import react from "@vitejs/plugin-react"
import ssr from "vite-plugin-ssr/plugin"
import { UserConfig } from "vite"
import path from "path"

const rootPath = path.resolve(process.cwd(), "src")

const config: UserConfig = {
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "~": rootPath,
    },
  },
}

// ts-prune-ignore-next
export default config
