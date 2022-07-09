/* eslint-disable react/jsx-props-no-spreading */
import { getSnippet, getSnippets } from "~/services/api"
import {
  SnippetsTemplate,
  SnippetsTemplateProps,
} from "~/features/PostTemplates"
import { StaticProps } from "../_app"
import { NextPage } from "next"

interface Params {
  params: {
    slug: string
  }
}

const Page: NextPage<SnippetsTemplateProps> = props => (
  <SnippetsTemplate {...props} />
)

export const getStaticProps = async ({
  params,
}: Params): StaticProps<SnippetsTemplateProps> => {
  const { slug } = params
  const post = await getSnippet(slug)

  return {
    props: {
      meta: post.meta,
      mdx: post.mdx,
    },
  }
}

export const getStaticPaths = async () => {
  const postMeta = getSnippets()
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
