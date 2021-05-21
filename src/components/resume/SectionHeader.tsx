import React from "react"

export const SectionHeader: React.FC<{ children: string }> = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export const PrintSectionHeader: React.FC<{ children: string }> = ({
  children,
}) => {
  return <h2 className="font-bold">{children}</h2>
}
