const path = require("path")

const postTemplate = path.resolve(__dirname, "./src/templates/post.tsx")
const snippetTemplate = path.resolve(__dirname, "./src/templates/snippet.tsx")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postQuery = await graphql(`
    query BlogPostQuery {
      allMdx(
        filter: {
          frontmatter: { published: { eq: true } }
          fileAbsolutePath: { regex: "/posts/" }
        }
      ) {
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

  const docsQuery = await graphql(`
    query DocsQuery {
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

  if (docsQuery.errors) {
    throw docsQuery.errors
  }

  const posts = postQuery.data.allMdx.edges

  const docs = docsQuery.data.allMdx.edges

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

  docs.forEach(doc => {
    // eslint-disable-next-line no-console
    const { id, frontmatter, body } = doc.node
    const path = `/snippets/snippet/${frontmatter.slug}`

    if (frontmatter.published) {
      // eslint-disable-next-line no-console
      console.log("Building snippet -> ", path)
      createPage({
        path,
        component: snippetTemplate,
        context: {
          id,
          meta: {
            title: frontmatter.title,
            description: frontmatter.description,
            path,
          },
          body,
        },
      })
    }
  })
}
