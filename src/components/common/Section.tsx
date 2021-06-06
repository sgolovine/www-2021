import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Section: React.FC<Props> = ({ children }) => (
  <div className="pb-6">{children}</div>
)
