# Sunny Golovine DOT COM

Codebase for my personal website

## Pre-requisites

Before running this project. Make sure that you have NodeJS 14+ installed. Also make sure you are running the latest version of NPM

## Running in Development

1. Make sure you have NodeJS 14+
2. Copy `.env.example` to `.env` and replace the values with your own
3. Install local dependencies (`npm install`)
4. Start the development server (`yarn start`)

Note that when running in development, the contact form and guestbook will not work as they require functions. To test these features run `yarn start:netlify`

## Local Formatting and Typechecking

- **format**: `yarn format`

- **typechecking**: `yarn tsc`

## Testing Production Builds

0. Make sure you have a defined `.env` file
1. Run `yarn build` to build the site
2. Run `yarn serve` to serve the production build

## Keeping packages up to date

1. Run `yarn update:check`
2. If there are any outdated packages run `yarn update:run`
3. Update the lockfile: `npm install --legacy-peer-deps`

## Finding and Removing Unused Packages

This project uses [depcheck](https://www.npmjs.com/package/depcheck) to check for unused dependencies. Run `yarn depcheck` to look for any unused dependencies. Depcheck will throw false positives for packages that aren't directly used in your code. Make sure packages are unused before removing them.

## Updating the DOC resume.

To generate a new DOC file of the resume, run `yarn generate-resume`.

There are several other commands for working on the resume:

`resume:start` - Start the dev server for the resume

`resume:build` - Build the resume to `/resume-dist`

`resume:serve` - Serve a copy of the built resume (requires running `resume:build` first)

`resume:export` - Export the resume to a PDF (requires `resume:serve`)

All of these commands are used internally by `generate-resume`

## Working on the CMS

This site uses NetlifyCMS for its content.

- Rather than keeping the config in a single file, this project keeps them under `static/admin/_config` and then generates a config file on the fly.
- The script that handles creating `config.yml` is located in `scripts/generate-cms-config.js`
- To edit preview templates and other addons, see `src/cms/cms.ts`
- To check the CMS configuration yaml for errors run `yarn cms:lint`
