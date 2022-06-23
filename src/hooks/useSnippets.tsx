export const useSnippets = () => {
  const snippetsQuery = {
    allMdx: {
      edges: [
        {
          node: {
            id: "some-id",
            frontmatter: {
              title: "Placeholder Title",
              description: "desc",
              slug: "/some-slug",
            },
          },
        },
      ],
    },
  }

  const snippets = snippetsQuery.allMdx.edges.map(item => ({
    id: item.node.id,
    title: item.node.frontmatter.title,
    // tags: item.node.frontmatter.tags.split(","),
    description: item.node.frontmatter.description,
    path: `/snippets/snippet/${item.node.frontmatter.slug}`,
  }))

  return snippets
}
