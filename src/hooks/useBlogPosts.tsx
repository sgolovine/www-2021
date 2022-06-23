import { BlogPost } from "~/model/BlogPost"

/**
 * OLD BLOG POST FETCHING CODE
 * USE AS A REFERENCE FOR CREATING A NEW
 * FETCHER
 */
// function sortBlogPosts(posts: BlogPost[]) {
//   return posts.sort(
//     (a: BlogPost, b: BlogPost) => b.date.getTime() - a.date.getTime()
//   )
// }

// const postQuery = useStaticQuery<QueryType>(graphql`
//   query PostHomePageQuery {
//     allMdx(
//       filter: {
//         frontmatter: { published: { eq: true } }
//         fileAbsolutePath: { regex: "/posts/" }
//       }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//             description
//             slug
//           }
//         }
//       }
//     }
//     file(absolutePath: { regex: "/posts/remotePosts.json/" }) {
//       childPostsJson {
//         posts {
//           date
//           id
//           title
//           description
//           url
//         }
//       }
//     }
//   }
// `)

// const remotePosts: BlogPost[] = sortBlogPosts(
//   postQuery.file.childPostsJson.posts.map(post => ({
//     id: uuid(),
//     title: post.title,
//     date: new Date(post.date),
//     description: post.description,
//     path: post.url,
//     type: "remote",
//   })) ?? []
// )

// const localPosts: BlogPost[] = sortBlogPosts(
//   postQuery?.allMdx?.edges.map(item => {
//     const { node } = item
//     return {
//       id: node.id,
//       title: node.frontmatter.title,
//       date: new Date(node.frontmatter.date),
//       description: node.frontmatter.description,
//       path: `/blog/post/${node.frontmatter.slug}`,
//       type: "local",
//     }
//   }) ?? []
// )

// const recentPosts: BlogPost[] = [...localPosts, ...remotePosts]
//   .sort((a: BlogPost, b: BlogPost) => b.date.getTime() - a.date.getTime())
//   .slice(0, 3)

const useBlogPosts = (): {
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
  recentPosts: BlogPost[]
} => ({
  localPosts: [],
  remotePosts: [],
  recentPosts: [],
})

export default useBlogPosts
