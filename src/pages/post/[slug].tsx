import { getLocalPosts, getPost, getRecentPosts } from "~/services/api"
import {
  BlogPostTemplate,
  BlogPostTemplateProps,
} from "~/features/PostTemplates"
import { StaticProps } from "../_app"
import { NextPage } from "next"

interface Params {
  params: {
    slug: string
  }
}

const Page: NextPage<BlogPostTemplateProps> = props => (
  <BlogPostTemplate {...props} />
)

export const getStaticProps = async ({
  params,
}: Params): StaticProps<BlogPostTemplateProps> => {
  const { slug } = params
  const post = await getPost(slug)
  const otherPosts = getRecentPosts(slug)

  return {
    props: {
      meta: post.meta,
      mdx: post.mdx,
      otherPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const postMeta = getLocalPosts()
  return {
    paths: postMeta.map(post => ({
      params: {
        slug: post.id,
      },
    })),
    fallback: false,
  }
}

export default Page
