import React from "react"

interface Props {
  title: string
  additionalText?: string
}

export const Header: React.FC<Props> = ({ title, additionalText }) => (
  <div className="my-4 text-center">
    <h1 className="hidden md:block text-4xl font-heading font-extrabold text-brand-yellow pb-4">
      {title}
    </h1>
    {additionalText && <p>{additionalText}</p>}
  </div>
)
