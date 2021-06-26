/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `siteData`,
        path: `${__dirname}/static/siteData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resumeData`,
        path: `${__dirname}/static/resumeData`,
      },
    },
    // We need to rename some current data fields to legacy labels
    // Before turning this on....
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `cms-data`,
    //     path: `${__dirname}/static/cms`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/static/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `sunnygolovine.com`,
        customDomain: `analytics.glvn.co`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-preact`,
  ],
}
