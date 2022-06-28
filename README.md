# sunnygolovine.com

This repository holds the code for my personal website.

## Architecture

This section covers the architecture of the website. At a high level, the website uses [React](https://reactjs.org/), [vite](https://vitejs.dev/), and [vite-plugin-ssr](https://vite-plugin-ssr.com/). Each will be discussed more in depth below.

### CMS

This website uses [NetlifyCMS](https://www.netlifycms.org/). The configuration files for the CMS are located in `internals/cms`. Prior to running `dev` or `build`, the CMS configuration is generated using `scripts/generate-cms-config.js` (used via `generate:cms:(dev|prod)`), the configuration file is then written to `public/config.yml`.

Loading the CMS on the client side is tricky. There are 3 files in `src/pages/admin`

- `admin.page.client.ts` - Used for initializing the CMS from using [netlify-cms-app](https://www.npmjs.com/package/netlify-cms-app)

- `admin.page.server.ts` - Renders and injects base HTML that `CMS.init()` inits into.

- `admin.page.route.ts` - Holds the route string.

We also use [netlify-cms-proxy-server](https://www.npmjs.com/package/netlify-cms-proxy-server) to allow using of the CMS locally.

### Posts & Snippets

The process for loading blog posts and snippets is very similar. The only difference really is just in metadata and paths. Posts are loaded in two ways: index files and generated post files.

**Pre-build**: Before building, we create a "Post Map". The postmap contains an array of items that have two items: `slug` and `filePath`. This allows Post Files to figure out which blog post to pull down based on the slug.

**Index Files**: Index files are located at `/blog` and `/snippets` and contain the index to view blog posts. When loading the index file, we use the helper `getPostPathsByGlob` which return an array of file paths from the base path. From there we iterate over each file, fetching file metadata for each post using [gray-matter]()

**Post Files**: Post files are generated files for each post/snippet. These are completely server generated and follow this process:

1. Get the post slug from the URL
2. Get the slug map. Form an absolute path for the post.
3. Get post file.
4. Extract post metadata (same thing we do for Index Files)
5. Compile post to html with Remark
6. Render the `PostTemplate` component using `ReactDOMServer.renderToString`, passing in the post html from the previous step that is rendered via `dangerouslySetInnerHtml`
7. The resulting HTML is returned to the client and displayed.

## Post Metadata

This section covers the convergence of Blog Posts and Snippets under a single data model.

**Common Metadata**

- title
- description
- slug
- published

**Post Metadata**

- date

**Snippets Metadata**

- tags
