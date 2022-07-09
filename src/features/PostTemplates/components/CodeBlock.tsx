import React from "react"

interface Props {
  className?: string
  children?: any
}

const languageLabels = {
  "language-javascript": "Javascript",
}

export const MDXPreComponent: React.FC<Props> = ({ className, children }) => {
  const match = (className ?? "").match(/language-([\0-\uFFFF]*)/)

  const label = (match ?? [])[1] ?? ""
  return (
    <div>
      {/* Header */}
      <div className="flex flex-row items-center justify-end">
        {!!label && (
          <p className="m-0 text-sm font-bold capitalize text-brand-yellow">
            {label}
          </p>
        )}
      </div>
      <pre className="m-0">{children}</pre>
    </div>
  )
}
