import React, { ReactNode } from "react"
import { NewHeader } from "./NewHeader"

interface Props {
  children: ReactNode
}

export const NewLayout: React.FC<Props> = ({ children }) => (
  <div>
    <NewHeader />
    <div className="max-w-3xl mx-auto my-4">{children}</div>
  </div>
)
