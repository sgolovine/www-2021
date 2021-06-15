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

## Updating the DOC resume.

To generate a new DOC file of the resume, run `yarn generate-resume`.

There are several other commands for working on the resume:

`resume:start` - Start the dev server for the resume

`resume:build` - Build the resume to `/resume-dist`

`resume:serve` - Serve a copy of the built resume (requires running `resume:build` first)

`resume:export` - Export the resume to a PDF (requires `resume:serve`)

All of these commands are used internally by `generate-resume`
