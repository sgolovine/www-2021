import React from "react"

interface Props {
  children: string
}

export const Pill: React.FC<Props> = ({ children }) => (
  <p className="mx-2 py-1 px-2 bg-gray-600 rounded-full text-sm font-bold">
    {children}
  </p>
)
