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
  return (
    <div className="section-container">
      <h2 className="section-header">{headerText}</h2>
      <div>{children}</div>
    </div>
  )
}