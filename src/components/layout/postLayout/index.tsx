import React, { ReactNode } from "react"
import { BackButton } from "./BackButton"

interface Props {
  title: string
  backRoute: string
  description?: string
  showAuthor?: boolean
  date?: string
  children: ReactNode
  extraContent?: () => ReactNode
}

export const PostLayout: React.FC<Props> = ({
  title,
  description,
  date,
  children,
  backRoute,
  extraContent,
}) => (
  <div className="max-w-2xl mx-auto">
    <div className="py-6 text-left">
      <div className="flex flex-row items-center justify-between">
        <BackButton backRoute={backRoute} />
        {date && <p className="text-brand-yellow font-bold">{date}</p>}
      </div>
      <h1 className="text-4xl font-black py-6">{title}</h1>
      {description && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </div>
    <hr className="my-6" />
    <div>{children}</div>
    {extraContent && (
      <>
        <hr className="my-6" />
        <div className="pb-12">{extraContent()}</div>
      </>
    )}
  </div>
)
