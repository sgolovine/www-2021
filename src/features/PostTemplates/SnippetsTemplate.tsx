import { MDXRemote } from "next-mdx-remote"
import { PostLayout } from "./components/PostLayout"
import { RawBlogPost, PostType } from "~/model/BlogPost"
import { MDXPreComponent } from "./components/CodeBlock"

export interface SnippetsTemplateProps {
  meta: RawBlogPost
  mdx: string
}

export const SnippetsTemplate: React.FC<SnippetsTemplateProps> = ({
  meta,
  mdx,
}) => (
  <>
    <PostLayout title={meta.title} type={PostType.Snippet}>
      <div className="prose">
        <MDXRemote compiledSource={mdx} components={{ pre: MDXPreComponent }} />
      </div>
    </PostLayout>
  </>
)
