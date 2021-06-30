import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const SectionLayout: React.FC<Props> = ({ children }) => (
  <div className="mb-12">{children}</div>
)
