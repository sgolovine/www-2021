import { CmsConfig, CmsBackend } from "netlify-cms-core"
import { siteDataCollection } from "./siteDataCollection"
import { snippetsCollection } from "./snippetsCollection"

const isDev = process.env.NODE_ENV === "development"

const devBackend: CmsBackend = {
  name: "git-gateway",
}

const prodBackend: CmsBackend = {
  name: "github",
  repo: "sgolovine/sunnygolovine.com",
  branch: "master",
}

export const cmsConfig: CmsConfig = {
  backend: isDev ? devBackend : prodBackend,
  local_backend: !!isDev,
  media_folder: "public/images",
  public_folder: "/images",
  publish_mode: "editorial_workflow",
  site_url: "https://sunnygolovine.com",
  display_url: "https://sunnygolovine.com",
  locale: "en",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "_",
  },
  collections: [siteDataCollection, snippetsCollection],
}
