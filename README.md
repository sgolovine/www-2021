# sunnygolovine.com

test change

This is the codebase for my personal website: [sunnygolovine.com](https://sunnygolovine.com)

- [sunnygolovine.com](#sunnygolovinecom)
  - [Statuses](#statuses)
  - [Previous Versions](#previous-versions)
  - [Development](#development)
    - [Pre-requisites](#pre-requisites)
    - [Setting up your dev enviorment](#setting-up-your-dev-enviorment)
    - [Configure Feature Flags](#configure-feature-flags)
    - [Local Formatting and Typechecking](#local-formatting-and-typechecking)
    - [Testing Production Builds](#testing-production-builds)
    - [Updating the DOC resume.](#updating-the-doc-resume)
    - [Working on the CMS](#working-on-the-cms)
  - [Maintainence](#maintainence)
    - [Keeping packages up to date](#keeping-packages-up-to-date)
    - [Finding and Removing Unused Packages](#finding-and-removing-unused-packages)
    - [Pruning](#pruning)

## Statuses

[![Production Tests CI](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-tests-ci.yml/badge.svg)](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-tests-ci.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fcc5dfd2-8bb8-47c9-9cc6-c65653e4d33d/deploy-status)](https://app.netlify.com/sites/sunnygolovine/deploys)

[![Test Build CI](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-build-ci.yml/badge.svg)](https://github.com/sgolovine/sunnygolovine.com/actions/workflows/production-build-ci.yml)

## Previous Versions

See the previous versions of my personal websites:

- [2020](https://github.com/sgolovine/sunnygolovine.com-2020)
- [2019](https://github.com/sgolovine/glvn.co)
- [2018](https://github.com/sgolovine/glvn.io)

## 2022 Updates

New Year! New Website? Most years I will build a new website, however this year I will just be updating this website. Some upcoming changes:

- New Homepage
- New Resume
- Better Blog Layout
- Better Snippets Layout

## Development

### Pre-requisites

Before running this project. Make sure that you have NodeJS 14+ installed. Also make sure you are running the latest version of NPM

### Setting up your dev environment

1. Make sure you have NodeJS 14+
2. Copy `.env.example` to `.env` and replace the values with your own
3. Install local dependencies (`yarn install`)
4. Start the development server (`yarn start`)

Note that when running in development, the contact form will not work as it requires functions. To test these features run `yarn start:netlify`

### Configure Feature Flags

WIP

### Local Formatting and Typechecking

- **format**: `yarn format`

- **typechecking**: `yarn tsc`

### Testing Production Builds

0. Make sure you have a defined `.env.development` file
1. Run `yarn build` to build the site
2. Run `yarn serve` to serve the production build

### Updating the DOC resume.

To generate a new DOC file of the resume, run `yarn generate-resume`.

There are several other commands for working on the resume:

`resume:start` - Start the dev server for the resume

`resume:build` - Build the resume to `/resume-dist`

`resume:serve` - Serve a copy of the built resume (requires running `resume:build` first)

`resume:export` - Export the resume to a PDF (requires `resume:serve`)

All of these commands are used internally by `generate-resume`

### Working on the CMS

This site uses NetlifyCMS for its content.

- Rather than keeping the config in a single file, this project keeps them under `static/admin/_config` and then generates a config file on the fly.
- The script that handles creating `config.yml` is located in `scripts/generate-cms-config.js`
- To edit preview templates and other addons, see `src/cms/cms.ts`
- To check the CMS configuration yaml for errors run `yarn cms:lint`

## Maintainence

### Keeping packages up to date

This project uses [npm-check-update](https://www.npmjs.com/package/npm-check-update) to keep packages up to date

1. Install the package: `npm install -g npm-check-updates`
2. Check for outdated deps: `ncu`
3. Update any outdated packages `ncu -u`
4. (Post Update) Run `yarn` to update the lockfile.

### Finding and Removing Unused Packages

This project uses [depcheck](https://www.npmjs.com/package/depcheck) to check for unused dependencies.

1. Run `npx depcheck` to check for updates
2. Fix any dependency issues (stay vigilant for false positives)

### Pruning

This project uses [ts-prune]("https://github.com/nadeesha/ts-prune") to check for any dead code paths.

1. Run `npx ts-prune`
2. Remove any unused code (stay vigilant for false positives)
