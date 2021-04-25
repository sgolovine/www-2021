const path = require("path")

module.exports = {
  ci: {
    collect: {
      staticDistDir: path.resolve(__dirname, "public"),
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
