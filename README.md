# sunnygolovine.com

This repository holds the code for my personal website.

## Architecture

This section covers the architecture of the website. At a high level, the website uses [React](https://reactjs.org/), [vite](https://vitejs.dev/), and [vite-plugin-ssr](https://vite-plugin-ssr.com/). Each will be discussed more in depth below.

### CMS

This website uses [NetlifyCMS](https://www.netlifycms.org/). The configuration files for the CMS are located in `internals/cms`. Prior to running `dev` or `build`, the CMS configuration is generated using `scripts/generate-cms-config.js` (used via `generate:cms:(dev|prod)`), the configuration file is then written to `public/config.yml`

### Posts & Snippets
