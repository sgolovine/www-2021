/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote"
import { getSnippet, getSnippets } from "~/services/api"
import { PostType, RawBlogPost } from "~/model/BlogPost"
import { PostSEO } from "~/components/common/SEO"
import { PostLayout } from "~/features/PostTemplates/components/PostLayout"

interface Params {
  params: {
    slug: string
  }
}

interface Props {
  meta: RawBlogPost
  mdx: string
}

export default ({ meta, mdx }: Props) => (
  <>
    <PostSEO
      title={meta.title}
      description={meta.description}
      date={meta.rawDate}
      path={meta.path}
    />
    <PostLayout title={meta.title} type={PostType.Snippet}>
      <div className="prose">
        <MDXRemote compiledSource={mdx} />
      </div>
    </PostLayout>
  </>
)

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
