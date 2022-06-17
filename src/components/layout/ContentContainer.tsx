import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const ContentContainer: React.FC<Props> = ({ children }) => (
  <div className="py-6">{children}</div>
)
