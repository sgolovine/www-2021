const path = require("path")

module.exports = {
  ci: {
    collect: {
      staticDistDir: path.resolve(__dirname, "public"),
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
