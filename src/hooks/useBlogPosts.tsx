import { useStaticQuery, graphql } from "gatsby"
import { BlogPost } from "~/model/BlogPost"

type RawData = {
  node: {
    id: string
    frontmatter: {
      title: string
      date: string
      description: string
      slug: string
    }
  }
}

const useBlogPosts = (): {
  allPosts: BlogPost[]
  recentPosts: BlogPost[]
} => {
  const postQuery = useStaticQuery(graphql`
    query {
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
          }
        }
      }
    }
  `)

  const allPosts =
    postQuery?.allMdx?.edges
      .map((item: RawData) => {
        const { node } = item
        return {
          id: node.id,
          title: node.frontmatter.title,
          date: new Date(node.frontmatter.date),
          description: node.frontmatter.description,
          path: `/blog/post/${node.frontmatter.slug}`,
        }
      })
      .sort((a: BlogPost, b: BlogPost) => {
        return b.date.getTime() - a.date.getTime()
      }) ?? []

  return {
    allPosts,
    recentPosts: allPosts.slice(0, 3),
  }
}

export default useBlogPosts
