import React from "react"

interface Props {
  children: string
}

export const Header: React.FC<Props> = ({ children }) => (
  <h1 className="hidden md:block text-4xl font-heading font-extrabold text-brand-yellow pb-4">
    {children}
  </h1>
)

export const Subheader: React.FC<Props> = ({ children }) => (
  <h2 className="text-2xl font-bold text-brand-yellow pb-3">{children}</h2>
)

export const Text: React.FC<Props> = ({ children }) => (
  <p className="leading-loose">{children}</p>
)
