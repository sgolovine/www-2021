/* eslint-disable react/jsx-props-no-spreading */
import { getSnippet, getSnippets } from "~/services/api"
import {
  SnippetsTemplate,
  SnippetsTemplateProps,
} from "~/features/PostTemplates"

interface Params {
  params: {
    slug: string
  }
}

export default (props: SnippetsTemplateProps) => <SnippetsTemplate {...props} />

export const getStaticProps = async ({ params }: Params) => {
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
