import classNames from "classnames"
import React, { ReactNode } from "react"

interface SectionContainerProps {
  headerText: string
  children: ReactNode
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  headerText,
  children,
}) => {
  const containerClasses = classNames("py-4")

  const headerClasses = classNames(
    "text-lg",
    "font-bold",
    "text-center",
    "py-4"
  )
  return (
    <div className={containerClasses}>
      <h2 className={headerClasses}>{headerText}</h2>
      <div>{children}</div>
    </div>
  )
}
