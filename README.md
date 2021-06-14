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

## Working on the Resume

- **start**: `yarn resume:start`
- **build**: `yarn resume:build`

Source files for the resume can be found under `/resume`.
When a resume is built the resulting source files will be under `/resume-dist`
