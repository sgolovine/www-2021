import { CmsCollection } from "netlify-cms-core"

export const snippetsCollection: CmsCollection = {
  name: "snippets",
  identifier_field: "docs",
  label: "Snippets",
  label_singular: "Snippet",
  description: "Documentation and Code Snippets",
  folder: "public/snippets",
  create: true,
  extension: "md",
  format: "frontmatter",
  fields: [
    {
      name: "title",
      label: "Snippet Title",
      widget: "string",
    },
    {
      name: "description",
      label: "Snippet Description",
      widget: "text",
    },
    {
      name: "slug",
      label: "Snippet Slug",
      widget: "string",
    },
    {
      name: "tags",
      label: "Snippet Tags (Comma Seperated)",
      widget: "string",
    },
    {
      name: "published",
      label: "Published",
      widget: "boolean",
    },
    {
      name: "body",
      label: "Snippet Content",
      widget: "markdown",
      modes: ["raw"],
      buttons: [],
    },
  ],
}
