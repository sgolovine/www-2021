const { minify } = require("html-minifier")
const fs = require("fs")
const path = require("path")

const inDir = path.resolve(process.cwd(), "cms")
const outDir = path.resolve(process.cwd(), ".cms-dist")

const htmlInPath = path.resolve(inDir, "index.html")
const htmlOutPath = path.resolve(outDir, "index.html")

const html = fs.readFileSync(htmlInPath, "utf-8")
const minifiedHtml = minify(html)

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true })
}

fs.mkdirSync(outDir)

fs.writeFileSync(htmlOutPath, minifiedHtml)
fs.copyFileSync(
  path.resolve(inDir, "config.yml"),
  path.resolve(outDir, "config.yml")
)
