import React from "react"

interface Props {
  children: string
}

export const Subheader: React.FC<Props> = ({ children }) => (
  <h2 className="text-2xl font-bold text-brand-yellow pb-3">{children}</h2>
)
