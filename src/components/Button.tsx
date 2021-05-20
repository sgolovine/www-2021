import React from "react"

interface Props {
  title?: string
  onClick?: () => void
  additionalClassNames?: string
}

export const Button: React.FC<Props> = ({
  title = "Button Title!",
  onClick = () => null,
  additionalClassNames = "",
}) => {
  return (
    <button
      className={`h-12 w-44 border-4 py-2 px-6 rounded shadow border-brand-yellow text-brand-white font-bold ${additionalClassNames}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
