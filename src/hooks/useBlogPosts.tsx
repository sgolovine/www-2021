import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuid } from "uuid"
import { BlogPost } from "~/model/BlogPost"

interface QueryType {
  allMdx: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          date: string
          description: string
          slug: string
        }
      }
    }[]
  }
  file: {
    childPostsJson: {
      posts: {
        id: number
        title: string
        description: string
        url: string
        date: string
      }[]
    }
  }
}

function sortBlogPosts(posts: BlogPost[]) {
  return posts.sort(
    (a: BlogPost, b: BlogPost) => b.date.getTime() - a.date.getTime()
  )
}

const useBlogPosts = (): {
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
  recentPosts: BlogPost[]
} => {
  const postQuery = useStaticQuery<QueryType>(graphql`
    query PostHomePageQuery {
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
              date
              description
              slug
            }
          }
        }
      }
      file(absolutePath: { regex: "/posts/remotePosts.json/" }) {
        childPostsJson {
          posts {
            date
            id
            title
            description
            url
          }
        }
      }
    }
  `)

  const remotePosts: BlogPost[] = sortBlogPosts(
    postQuery.file.childPostsJson.posts.map(post => ({
      id: uuid(),
      title: post.title,
      date: new Date(post.date),
      description: post.description,
      path: post.url,
      type: "remote",
    })) ?? []
  )

  const localPosts: BlogPost[] = sortBlogPosts(
    postQuery?.allMdx?.edges.map(item => {
      const { node } = item
      return {
        id: node.id,
        title: node.frontmatter.title,
        date: new Date(node.frontmatter.date),
        description: node.frontmatter.description,
        path: `/blog/post/${node.frontmatter.slug}`,
        type: "local",
      }
    }) ?? []
  )

  const recentPosts: BlogPost[] = [...localPosts, ...remotePosts]
    .sort((a: BlogPost, b: BlogPost) => b.date.getTime() - a.date.getTime())
    .slice(0, 3)

  return {
    localPosts,
    remotePosts,
    recentPosts,
  }
}

export default useBlogPosts
