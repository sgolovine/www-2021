const path = require("path")

const postTemplate = path.resolve(__dirname, "./src/templates/post.tsx")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postQuery = await graphql(`
    query BlogPostQuery {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date
              slug
              published
            }
            body
          }
        }
      }
    }
  `)

  if (postQuery.errors) {
    throw postQuery.errors
  }

  const posts = postQuery.data.allMdx.edges

  posts.forEach(post => {
    const { id, frontmatter, body } = post.node
    const path = `/blog/post/${frontmatter.slug}`

    // eslint-disable-next-line no-console
    console.log("Building post -> ", path)
    if (frontmatter.published) {
      createPage({
        path,
        component: postTemplate,
        context: {
          postId: id,
          postMeta: {
            title: frontmatter.title,
            description: frontmatter.description,
            date: frontmatter.date,
            path,
          },
          postBody: body,
        },
      })
    }
  })
}
