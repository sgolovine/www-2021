import { MDXRemote } from "next-mdx-remote"
import { PostLayout } from "./components/PostLayout"
import { RawBlogPost, PostType } from "~/model/BlogPost"
import { MDXPreComponent } from "./components/CodeBlock"

export interface BlogPostTemplateProps {
  meta: RawBlogPost
  mdx: string
  otherPosts: RawBlogPost[]
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  meta,
  mdx,
  otherPosts,
}) => (
  <>
    <PostLayout
      title={meta.title}
      type={PostType.Post}
      description={meta.description}
      date={meta.rawDate}
      showAuthor
      otherPosts={otherPosts}
    >
      <div className="prose">
        <MDXRemote components={{ pre: MDXPreComponent }} compiledSource={mdx} />
      </div>
    </PostLayout>
  </>
)
