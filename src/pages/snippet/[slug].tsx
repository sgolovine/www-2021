import { getSnippet, getSnippets } from "~/services/api"
import {
  SnippetsTemplate,
  SnippetsTemplateProps,
} from "~/features/PostTemplates"
import { StaticProps } from "../_app"
import { NextPage } from "next"
import { SnippetSEO } from "~/components/seo"

interface Params {
  params: {
    slug: string
  }
}

const Page: NextPage<SnippetsTemplateProps> = props => (
  <>
    <SnippetSEO
      title={props.meta.title}
      description={props.meta.description}
      slug={props.meta.id}
    />
    <SnippetsTemplate {...props} />
  </>
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
