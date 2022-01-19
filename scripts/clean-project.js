// Clean script
// Run `yarn clean` to run this script

const fs = require("fs")
const path = require("path")

const projectRoot = path.resolve(__dirname, "..")

/**
 * Add files here to be deleted by the script
 * For deeply nested items, use path/to/file.tsx
 */
const config = [
  ".cache",
  "test.txt",
  "node_modules",
  "yarn-error.log",
  "public",
  "resume-dist",
]

function deleteArtifact(file) {
  const artifactPath = path.resolve(projectRoot, file)
  try {
    if (fs.existsSync(artifactPath)) {
      console.log(`Deleting: ${file}`)
      fs.rmSync(artifactPath, { recursive: true })
    } else {
      console.log(`Skipping: ${file} (file does not exist)`)
    }
  } catch (e) {
    console.log(`Error: ${file}`)
    console.log(e)
  }
}

;(() => config.map(file => deleteArtifact(file)))()
