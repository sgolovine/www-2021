import { MDXRemote } from "next-mdx-remote"
import { getLocalPosts, getPost, getRecentPosts } from "~/services/api"
import { RawBlogPost } from "~/model/BlogPost"
import { PostLayout } from "~/components/layout/post"
import { PostSEO } from "~/components/common/SEO"

interface Params {
  params: {
    slug: string
  }
}

interface Props {
  meta: RawBlogPost
  mdx: string
  otherPosts: RawBlogPost[]
}

export default ({ meta, mdx, otherPosts }: Props) => (
  <>
    <PostSEO
      title={meta.title}
      description={meta.description}
      date={meta.rawDate}
      path={meta.path}
    />
    <PostLayout
      title={meta.title}
      type="post"
      description={meta.description}
      date={meta.rawDate}
      showAuthor
      otherPosts={otherPosts}
    >
      <div className="prose">
        <MDXRemote compiledSource={mdx} />
      </div>
    </PostLayout>
  </>
)

export const getStaticProps = async ({ params }: Params) => {
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
