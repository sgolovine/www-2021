const path = require("path")
const { isDeleteExpression } = require("typescript")

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
              date
              description
              slug
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

    console.log("Building post -> ", path)

    createPage({
      path,
      component: postTemplate,
      context: {
        postId: id,
        postMeta: {
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description,
        },
        postBody: body,
      },
    })
  })
}
