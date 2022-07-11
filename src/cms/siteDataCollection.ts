import { CmsCollection } from "netlify-cms-core"

const config: CmsCollection = {
  name: "site-data",
  label: "Site Data",
  files: [
    {
      file: "public/cms/site-data/bio.json",
      name: "bio",
      label: "Bio",
      fields: [
        {
          name: "bio",
          label: "Bio",
          widget: "text",
        },
      ],
    },
    {
      file: "public/cms/site-data/contact.json",
      name: "contact-info",
      label: "Contact Info",
      fields: [
        {
          label: "Email",
          name: "email",
          widget: "string",
        },
        {
          label: "Phone Number",
          name: "phone-number",
          widget: "string",
        },
        {
          label: "Alternative Phone Number",
          name: "phone-number-alt",
          widget: "string",
        },
        {
          label: "Instagram",
          name: "instagram",
          widget: "string",
        },
        {
          label: "Twitter",
          name: "twitter",
          widget: "string",
        },
        {
          label: "Github",
          name: "github",
          widget: "string",
        },
        {
          label: "LinkedIn",
          name: "linkedin",
          widget: "string",
        },
        {
          label: "Dev.to",
          name: "dev-to",
          widget: "string",
        },
        {
          label: "Website",
          name: "website",
          widget: "string",
          required: false,
          default: "https://sunnygolovine.com",
        },
      ],
    },
    {
      file: "public/cms/site-data/work.json",
      name: "work",
      label: "Work and Side Projects",
      fields: [
        {
          name: "work-data",
          label: "Previous Work",
          widget: "list",
          summary: "{{fields.name}}",
          fields: [
            {
              name: "name",
              label: "Name",
              widget: "string",
            },
            {
              name: "url",
              label: "URL",
              widget: "string",
              required: false,
            },
            {
              name: "description",
              label: "Description",
              widget: "text",
              required: false,
            },
            {
              name: "project-type",
              label: "Project Type",
              widget: "select",
              options: [
                {
                  label: "Side Project",
                  value: "side-project",
                },
                {
                  label: "Professional Project",
                  value: "professional",
                },
              ],
            },
            {
              name: "show-in-recent-projects",
              label: "Show in Recent work?",
              widget: "boolean",
              default: false,
            },
          ],
        },
      ],
    },
  ],
}

export { config as siteDataCollection }
