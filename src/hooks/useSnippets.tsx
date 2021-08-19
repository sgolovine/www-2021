import { graphql, useStaticQuery } from "gatsby"

export interface SnippetsQuery {
  allMdx: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          tags: string
          slug: string
        }
      }
    }[]
  }
}

export const useSnippets = () => {
  const snippetsQuery = useStaticQuery<SnippetsQuery>(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/snippets/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              tags
              slug
            }
          }
        }
      }
    }
  `)

  const snippets = snippetsQuery.allMdx.edges.map(item => ({
    id: item.node.id,
    title: item.node.frontmatter.title,
    tags: item.node.frontmatter.tags.split(","),
    path: `/snippets/snippet/${item.node.frontmatter.slug}`,
  }))

  return snippets
}
