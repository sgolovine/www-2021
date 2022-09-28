import classNames from "classnames"
import { useMemo } from "react"

interface Props {
  title?: string
  onClick?: () => void
  secondary?: boolean
}

const btnBaseClasses = classNames(
  "border",
  "px-4",
  "py-2",
  "rounded",
  "shadow",
  "font-medium",
  "text-white"
)

const btnPrimaryClasses = classNames(
  "bg-green-500",
  "hover:bg-green-600",
  "active:bg-green-400"
)

const btnSecondaryClasses = classNames(
  "bg-red-500",
  "hover:bg-red-600",
  "active:bg-red-400"
)

export const Button: React.FC<Props> = ({ title, onClick, secondary }) => {
  const buttonClasses = classNames(
    btnBaseClasses,
    secondary && btnSecondaryClasses,
    !secondary && btnPrimaryClasses
  )

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {title ?? "Button Title"}
    </button>
  )
}
