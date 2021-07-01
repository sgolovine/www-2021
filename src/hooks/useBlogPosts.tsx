import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useState } from "react"
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
  localPosts: BlogPost[]
  remotePosts: BlogPost[]
  recentPosts: BlogPost[]
  remotePostsLoading: boolean
  remotePostsError: boolean
} => {
  const [remotePostsLoading, setRemotePostsLoading] = useState<boolean>(false)
  const [remotePostsError, setRemotePostsError] = useState<boolean>(false)
  const [remotePosts, setRemotePosts] = useState<BlogPost[]>([])

  // Fetch posts from dev.to
  // We do not fetch the entire post
  // We just will fetch the titles, descriptions and href to the actual post
  useEffect(() => {
    if (process.env.GATSBY_DEV_USERNAME) {
      setRemotePostsError(false)
      setRemotePostsLoading(true)
      const fetchUrl = `https://dev.to/api/articles?username=${process.env.GATSBY_DEV_USERNAME}`
      axios
        .get(fetchUrl)
        .then(resp => {
          setRemotePostsLoading(false)
          if (resp && resp.data && resp.data.length > 0) {
            setRemotePosts(
              resp.data.map(
                (item: {
                  id: number
                  canonical_url: string
                  title: string
                  description: string
                  published_timestamp: string
                }) => ({
                  id: item.id,
                  title: item.title,
                  date: item.published_timestamp,
                  path: item.canonical_url,
                  description: item.description,
                })
              )
            )
          }
        })
        .catch(err => {
          setRemotePostsLoading(false)
          setRemotePostsError(true)
          // eslint-disable-next-line no-console
          console.error(err)
        })
    }
  }, [])

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

  const localPosts =
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
      .sort(
        (a: BlogPost, b: BlogPost) => b.date.getTime() - a.date.getTime()
      ) ?? []

  return {
    localPosts,
    remotePosts,
    remotePostsLoading,
    remotePostsError,
    recentPosts: localPosts.slice(0, 3),
  }
}

export default useBlogPosts
