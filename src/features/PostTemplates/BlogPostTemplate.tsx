import { MDXRemote } from "next-mdx-remote"
import { PostSEO } from "./components/PostSEO"
import { PostLayout } from "./components/PostLayout"
import { RawBlogPost, PostType } from "~/model/BlogPost"

interface Props {
  meta: RawBlogPost
  mdx: string
  otherPosts: RawBlogPost[]
}

export const BlogPostTemplate: React.FC<Props> = ({
  meta,
  mdx,
  otherPosts,
}) => (
  <>
    <PostSEO
      title={meta.title}
      description={meta.description}
      date={meta.rawDate}
      path={meta.path}
    />
    <PostLayout
      title={meta.title}
      type={PostType.Post}
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
