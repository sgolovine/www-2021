---
title: Version Generator for JS Apps
description: Often times it's advantageous to have the current version of your
  application somewhere on the UI. This NodeJS script will generate a file with
  the current version from package.json and the latest commit, the place it in
  your public folder for your app to pickup.
slug: /version-generator-script
tags: javascript
published: true
---
**Code**:

```javascript
/**
 * This script will generate a `version.json`
 * file that is placed in `public/version.json`
 *
 * The file contains two keys:
 * - version - the latest version from package.json
 * - commit - the latest commit from git
 *
 */
const fs = require("fs/promises");
const path = require("path");
const { exec } = require("child_process");

// This script assumes that you will be running this
// Script as an NPM command from the root directory.
// If you plan to do something different, this line should be changed
const packageJsonPath = path.resolve(process.cwd(), "package.json");

// By default this script outputs to /public/version.json
// If your public directory is in another location. This line should be changed
// To reflect that new location.
const versionConfigPath = path.resolve(process.cwd(), "public", "version.json");

// This is the git command that is used to fetch the latest commit.
// You can put something different here so long as it returns just a
// Single string representing the commit.
const gitCommitCommand = "git rev-parse HEAD";

// Helper method to get the latest git commit
// This is so we can wrap it in a promise and use it
// Inside the main method as an async function.
async function fetchCommit() {
  return new Promise((resolve, reject) => {
    exec(gitCommitCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject("An error occurred fetching the latest git commit");
      }
      if (stderr) {
        console.error(stderr);
        reject("An error occurred fetching the latest git commit");
      }
      resolve(stdout);
    });
  });
}

// MAIN
(async () => {
  console.info("Generating version");

  // Fetch package.json version
  const packageJsonFile = await fs.readFile(packageJsonPath, "utf-8");
  const parsedPackageJson = JSON.parse(packageJsonFile);
  console.info(`Found version: ${parsedPackageJson.version}`);

  // Fetch latest commit
  console.info("Fetching latest commit");
  const latestCommit = await fetchCommit();
  console.info(`Found latest commit: ${latestCommit}`);

  // Write to config file
  const JSONData = JSON.stringify(
    {
      version: parsedPackageJson.version,
      commit: latestCommit.replace("\n", ""),
    },
    null,
    2
  );

  console.info(`Writing to ${versionConfigPath}`);

  await fs.writeFile(versionConfigPath, JSONData);

  console.info("Successfully wrote config file");
})();
```

**Usage**: 

Place this file in `scripts/generate-version.js` or another file in your project. Then add a script to package.json that executes the script:

```json
"generate-version": "node ./scripts/generate-version.js",
"prebuild": "npm run generate-version",
"prestart": "npm run generate-version"
```

If you plan on using this in your UI, you should add two "pre" scripts, they should be named `pre<YOUR_DEV_COMMAND>` and `pre<YOUR_BUILD_COMMAND>`. This will ensure that a fresh file is generated every time you start the app in development or build the site. You can also safely add the file to your `.gitignore` as it will be added at buildtime.



