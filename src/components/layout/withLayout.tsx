import React from "react"
import { NewLayout } from "./NewLayout"

export const withNewLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>,
    noContentMargin?: boolean
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <NewLayout noContentMargin={noContentMargin}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </NewLayout>
    )
