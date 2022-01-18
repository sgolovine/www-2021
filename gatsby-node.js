const path = require("path")
const { v4: uuid } = require("uuid")

const postTemplate = path.resolve(__dirname, "./src/templates/post.tsx")
const snippetTemplate = path.resolve(__dirname, "./src/templates/snippet.tsx")

// eslint-disable-next-line import/no-dynamic-require
const remotePosts = require(path.resolve(
  __dirname,
  "static",
  "posts",
  "remotePosts.json"
))

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

    // Fetch other local posts
    const otherLocalPosts = posts
      .filter(post => post.node.id !== id)
      .map(currPost => ({
        id: uuid(),
        title: currPost.node.frontmatter.title,
        link: buildPostPath(currPost.node.frontmatter.slug),
        postType: "local",
        date: currPost.node.frontmatter.date,
      }))

    // Fetch other remote posts (from dev.to)
    const otherRemotePosts =
      remotePosts &&
      remotePosts.posts.map(item => ({
        id: uuid(),
        title: item.title,
        link: item.url,
        postType: "remote",
        date: item.date,
      }))

    // Combine into one array, sort and pick the 5 most recent.
    const otherPosts = [...otherLocalPosts, ...otherRemotePosts]
      .sort(
        (postA, postB) =>
          new Date(postB.date).getTime() - new Date(postA.date).getTime()
      )
      .slice(0, 5)

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
