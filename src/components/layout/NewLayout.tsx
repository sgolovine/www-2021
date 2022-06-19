import classNames from "classnames"
import React, { ReactNode } from "react"
import { NewHeader } from "./NewHeader"

interface Props {
  children: ReactNode
  noContentMargin?: boolean
}

export const NewLayout: React.FC<Props> = ({ children, noContentMargin }) => {
  const classes = classNames("mx-auto", {
    "max-w-3xl": !noContentMargin,
    "my-4": !noContentMargin,
  })
  return (
    <div>
      <NewHeader />
      <div className={classes}>{children}</div>
    </div>
  )
}
