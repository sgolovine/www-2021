import React from "react"
import { Layout } from "../layout/page"

export const withNewLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>,
    noContentMargin?: boolean
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <Layout noContentMargin={noContentMargin}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </Layout>
    )
