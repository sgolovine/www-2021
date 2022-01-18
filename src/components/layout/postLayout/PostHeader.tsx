import React from "react"
import { BackButton } from "./BackButton"

interface HeaderProps {
  title: string
  backRoute: string
  date?: string
  description?: string
}

const PostHeader: React.FC<HeaderProps> = ({
  title,
  description,
  backRoute,
  date,
}) => (
  <div>
    {/* Header and Back Button */}
    {date ? (
      <div className="flex flex-row justify-between items-center py-4">
        <BackButton backRoute={backRoute} />
        <p className="text-sm font-bold text-brand-yellow">{date}</p>
      </div>
    ) : (
      <div className="flex flex-row justify-start items-center py-4">
        <BackButton backRoute={backRoute} />
      </div>
    )}

    {/* Title */}
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-center">
        {title}
      </h1>
    </div>
    <div className="my-4 border-2 border-slate-600 p-4 rounded-lg">
      <p className="text-lg">{description}</p>
    </div>
  </div>
)

export default PostHeader
