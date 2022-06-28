import React from "react"
import { PostType } from "~/model/Posts"

interface HeaderProps {
  title: string
  date?: string
  description?: string
  type: PostType
}

const PostHeader: React.FC<HeaderProps> = ({
  title,
  description,
  date,
  type,
}) => (
  <div>
    {/* Title */}
    <div className="py-4">
      <p className="text-lg font-heading font-bold text-center text-brand-yellow py-2">
        {type === PostType.Post ? "Post" : "Snippet"}
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-center">
        {title}
      </h1>
      <p className="text-sm font-bold text-center text-brand-link py-4">
        {date}
      </p>
    </div>
    {description && (
      <div className="my-4 border-2 border-slate-600 p-4 rounded-lg">
        <p className="text-lg">{description}</p>
      </div>
    )}
  </div>
)

export default PostHeader
