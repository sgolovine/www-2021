<!-- [ Header ] -->
<div style="width:100%;display:flex;flex-direction:row;justify-content:center;">
  <div style="height:600px;">
    <img alt="website-screenshot" src="./screenshots/website.png" />
  </div>
</div>

# sunnygolovine.com

[![Production Tests CI](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-tests-ci.yml/badge.svg)](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-tests-ci.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/fcc5dfd2-8bb8-47c9-9cc6-c65653e4d33d/deploy-status)](https://app.netlify.com/sites/sunnygolovine/deploys) [![Test Build CI](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-build-ci.yml/badge.svg)](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-build-ci.yml)

Repository for my personal website.

[Live Version](https://sunnygolovine.com)

## Getting Started

Follow these steps to get the project up and running on your machine.

1. Make sure that you have NodeJS installed. It is recommended to use [NVM](https://github.com/nvm-sh/nvm). You should install v16+

2. Clone this repository:

```bash

git clone https://github.com/sgolovine/sunnygolovine.com

```

3. Install Pre-requisites: You should have [Yarn](https://yarnpkg.com/) installed, the package manager used in this project.

```bash

npm install -g yarn

```

4. Install Dependencies: This should be run inside the project directory.

```bash

yarn install

```

5. Run the Project

```bash

yarn dev

```

## Maintenance

This section covers the ways this project is kept clean. This project uses the following devtools:

- [Typescript](https://www.typescriptlang.org/): Used for typechecking
- [ESLint](https://eslint.org/): Used for linting
- [Prettier](https://prettier.io/): Used for code formatting
- [ts-prune](https://github.com/nadeesha/ts-prune): Used in conjunction with Typescript to find dead code.
- [depcheck](https://github.com/depcheck/depcheck): Checks for unused dependencies.

Below is a table of all maintenance commands. All commands should be run like:

```bash

yarn <<command_name>>

```

| Command                | Description             | Tool       | Config             | Part of `ci` Command |
| ---------------------- | ----------------------- | ---------- | ------------------ | -------------------- |
| `ci`                   | Runs all commands       | All        | ---                | ---                  |
| `typecheck` / `tsc`    | Run typechecking        | Typescript | `tsconfig.json`    | yes                  |
| `lint`                 | Run lining              | ESLint     | `.eslintrc.js`     | yes                  |
| `format`               | Format code             | Prettier   | `.prettierrc`      | yes                  |
| `find-unused-code`     | Find unused (dead) code | ts-prune   | `.ts-prunerc.json` | yes                  |
| `find-unused-packages` | Find unused packages    | depcheck   | `.depcheckrc.yml`  | yes                  |

## Architecture

This section goes over the architecture of teh website. The website is built with [Gatsby](https://www.gatsbyjs.com/) and is hosted on [Netlify](https://www.netlify.com/).

### Data

- **Website Data**: Data for the website is inputted via [NetlifyCMS](https://www.netlifycms.org/). This data is stored in `public/cms/site-data`. It is read directly using FS and other Node utilities in `src/pages`.
- **Blog Posts / Snippets**: These are fetched in the same manner with MDX. Pages are built dynamically using NextJS slug pages and are kept under `/post/:slug` and `/snippet/:slug`
- **Resume Data**: Resume data is stored in `public/resume/resume.json` and uses a heavily modified version of [JSON Resume](https://jsonresume.org/)
- **dev.to posts** - The blog also fetches posts from dev.to. These are fetched using `scripts/fetch-remote-blog-posts.js` script. The data is stored in `public/posts/remotePosts.js`

### Folder Structure

The folder structure uses a modified version of [bulletproof react](https://github.com/alan2207/bulletproof-react). All page UI is stored in `src/features`. The pages are then used in `src/pages`. Any NextJS specific logic such as `getStaticProps`, `getStaticPaths`, and `Component.getLayout` is kept in `src/pages` as well.

### UI

The UI for the site is built using [TailwindCSS](https://tailwindcss.com/). We also use several utilities like [classnames](https://www.npmjs.com/package/classnames) for custom CSS logic intertwined with JS.

### PDF Resume

In order to export our JSON Resume as a PDF, a number of tools are used:

- [handlebars](): Used for templating the resume.
- [puppeteer](): Used for exporting the web page to a PDF
- [nodeHttpServer](): Used for programmatically spinning up a dev server.

Below are the relevant locations for all files:

- Script Files: `/scripts/resume`
- Resume Template Files: `/resume`
- Resume Data Files: `/static/resume`

## Creating a PDF Resume

In addition to hosting the resume on the website, there is a workflow to generate a PDF from `resume.json`. Under the hood, we have a custom NodeJS script which starts a dev server for us, then we will spin up puppeteer to "print" the page to a PDF document. The commands to work on and generate a PDF resume are below. All commands should be run like: `yarn <<command_name>>`:

| Command        | Description                   |
| -------------- | ----------------------------- |
| `resume:dev`   | Start the development server. |
| `resume:build` | Builds the resume to a PDF    |

When a resume is exported, it is exported to the following format: `resume-{{month}}-{{day}}-{{year}}.pdf`. If a file of the same name already exists, it will overwrite that file. An easy strategy to quickly test changes in a PDF viewer is to build the resume, open it in a PDF viewer, then re-run `resume:build` to update the file
