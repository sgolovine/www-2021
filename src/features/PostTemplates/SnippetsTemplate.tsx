import { MDXRemote } from "next-mdx-remote"
import { PostSEO } from "./components/PostSEO"
import { PostLayout } from "./components/PostLayout"
import { RawBlogPost, PostType } from "~/model/BlogPost"

export interface SnippetsTemplateProps {
  meta: RawBlogPost
  mdx: string
}

export const SnippetsTemplate: React.FC<SnippetsTemplateProps> = ({
  meta,
  mdx,
}) => (
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
