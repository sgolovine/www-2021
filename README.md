# Sunny Golovine DOT COM

Codebase for my personal website

## Pre-requisites

Before running this project. Make sure that you have NodeJS 14+ installed. Also make sure you are running the latest version of NPM

## Running in Development

1. Make sure you have NodeJS 14+
2. Copy `.env.example` to `.env` and replace the values with your own
3. Install local dependencies (`npm install`)
4. Start the development server (`npm run start`)

Note that when running in development, the contact form and guestbook will not work as they require functions. To test these features run `npm run start:netlify`

## Local Formatting and Typechecking

- **format**: `npm run format`

- **typechecking**: `npm run tsc`

## Testing Production Builds

0. Make sure you have a defined `.env` file
1. Run `npm run build` to build the site
2. Run `npm run serve` to serve the production build

## Keeping packages up to date

1. Run `npm run update:check`
2. If there are any outdated packages run `npm run update:run`
3. Update the lockfile: `npm install --legacy-peer-deps`

## Updating Resume PDF

NOTE: This will eventually be brought into this repository

1. Clone the [resume repo](https://github.com/sgolovine/resume)
2. Follow [the readme](https://github.com/sgolovine/resume/blob/master/README.md) to update data and generate a new PDF
3. Update PDF resume in `~/static/doc/resume.pdf`
