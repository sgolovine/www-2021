import { CmsCollection, CmsField } from "netlify-cms-core"

const pageTitleOptions: CmsField[] = [
  {
    label: "Page Title",
    name: "page-title",
    widget: "string",
  },
  {
    label: "Show In Navigation",
    name: "show-in-nav",
    widget: "boolean",
    required: false,
  },
]

const slugPageOptions: CmsField[] = [
  {
    label: "Page Title",
    name: "page-title",
    widget: "string",
  },
]

const config: CmsCollection = {
  name: "site-settings",
  label: "Site Settings",
  files: [
    {
      file: "public/cms/site-settings/page-titles.json",
      name: "page-titles",
      label: "Page Titles",
      fields: [
        {
          name: "home",
          label: "Home Page",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "work",
          label: "Work Page",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "links",
          label: "links",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "blog",
          label: "Blog",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "blog-slug",
          label: "Blog Slug Page",
          widget: "object",
          fields: slugPageOptions,
        },
        {
          name: "resume",
          label: "Resume",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "snippets",
          label: "Snippets",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          label: "Snippet Slug Page",
          name: "snippet-slug",
          widget: "object",
          fields: slugPageOptions,
        },
        {
          name: "contact",
          label: "Contact Page",
          widget: "object",
          fields: pageTitleOptions,
        },
        {
          name: "debug",
          label: "Debug Page",
          widget: "object",
          fields: pageTitleOptions,
        },
      ],
    },
    {
      file: "public/cms/site-settings/general.json",
      name: "settings",
      label: "Settings",
      fields: [
        {
          name: "contact-email-address",
          label: "Contact Email Address",
          widget: "string",
        },
      ],
    },
    {
      file: "public/cms/site-settings/seo.json",
      name: "seo",
      label: "SEO",
      fields: [
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
        {
          name: "twitter-handle",
          label: "Twitter Handle",
          widget: "string",
        },
        {
          name: "blog-post-author",
          label: "Blog Post Author",
          widget: "string",
        },
        {
          name: "twitter-card-type",
          label: "Twitter Card Type",
          widget: "string",
          default: "summary_large_card",
        },
      ],
    },
  ],
}

export { config as siteSettingsCollection }
