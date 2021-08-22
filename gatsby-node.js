const path = require("path")

const postTemplate = path.resolve(__dirname, "./src/templates/post.tsx")
const snippetTemplate = path.resolve(__dirname, "./src/templates/snippet.tsx")

function buildPostPath(path) {
  return `/blog/post/${path}`
}

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
            }
            body
          }
        }
      }
    }
  `)

  const snippetsQuery = await graphql(`
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

  if (snippetsQuery.errors) {
    throw snippetsQuery.errors
  }

  const posts = postQuery.data.allMdx.edges

  const snippets = snippetsQuery.data.allMdx.edges

  posts.forEach(post => {
    const { id, frontmatter, body } = post.node
    const path = buildPostPath(frontmatter.slug)

    // Other Posts
    // These are posts that appear at the bottom
    // of the blog post. This should be the last 5
    // posts not including the current post, sorted descending order
    const otherPosts = posts
      .filter(post => post.node.id !== id)
      .sort(
        (postA, postB) =>
          new Date(postB.node.frontmatter.date).getTime() -
          new Date(postA.node.frontmatter.date).getTime()
      )
      .map(currPost => ({
        id: currPost.node.id,
        title: currPost.node.frontmatter.title,
        link: buildPostPath(currPost.node.frontmatter.slug),
      }))

    // eslint-disable-next-line no-console
    console.log("Building post -> ", path)
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
        otherPosts,
      },
    })
  })

  snippets.forEach(doc => {
    // eslint-disable-next-line no-console
    const { id, frontmatter, body } = doc.node
    const path = `/snippets/snippet/${frontmatter.slug}`

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
  })
}
