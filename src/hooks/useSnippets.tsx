import { graphql, useStaticQuery } from "gatsby"

interface SnippetsQuery {
  allMdx: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          // tags: string
          slug: string
          description: string
        }
      }
    }[]
  }
}

export const useSnippets = () => {
  const snippetsQuery = useStaticQuery<SnippetsQuery>(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/snippets/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
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
    // tags: item.node.frontmatter.tags.split(","),
    description: item.node.frontmatter.description,
    path: `/snippets/snippet/${item.node.frontmatter.slug}`,
  }))

  return snippets
}
