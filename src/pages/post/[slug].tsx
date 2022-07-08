/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote"
import { getLocalPosts, getPost } from "~/services/api"
import { RawBlogPost } from "~/model/BlogPost"
import { PostLayout } from "~/components/layout"
import { PostSEO } from "~/components/common/SEO"

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
    <PostLayout title={meta.title} type="post">
      <div className="prose">
        <MDXRemote compiledSource={mdx} />
      </div>
    </PostLayout>
  </>
)

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params
  const post = await getPost(slug)

  return {
    props: {
      meta: post.meta,
      mdx: post.mdx,
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