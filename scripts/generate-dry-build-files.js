// When doing a dry build, this script will geneate the appropriate
// Dry build files for the site so the build can run
require("dotenv").config()
const fs = require("fs")
const path = require("path")

const remotePostsOutputPath = path.resolve(
  __dirname,
  "..",
  "static",
  "posts",
  "remotePosts.json"
)

const cmsConfigPath = path.resolve(
  __dirname,
  "..",
  "static",
  "admin",
  "_config",
  "dry_build_config.yml"
)
const cmsConfigOutputPath = path.resolve(
  __dirname,
  "..",
  "static",
  "admin",
  "config.yml"
)

const remotePostsJSON = JSON.stringify(
  {
    posts: [
      {
        id: 0,
        title: "Post",
        description: "Post description",
        url: "https://dev.to/sgolovine/post",
        date: "2021-06-25T16:03:51Z",
      },
    ],
  },
  null,
  2
)

;(() => {
  console.log("🚚 Generating Dry Build Configurations")

  fs.writeFileSync(remotePostsOutputPath, remotePostsJSON)
  console.log(
    "📋 Wrote dry build remotePosts config to: ",
    remotePostsOutputPath
  )

  fs.copyFileSync(cmsConfigPath, cmsConfigOutputPath)
  console.log("📋 Wrote dry build CMS config to: ", cmsConfigOutputPath)
})()
