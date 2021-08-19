import React from "react"
import Layout from "~/components/layout"

export const withLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </Layout>
    )

// const withLoading =
//   <P extends object>(
//     Component: React.ComponentType<P>
//   ): React.FC<P & WithLoadingProps> =>
//   ({ loading, ...props }: WithLoadingProps) =>
//     loading ? <LoadingSpinner /> : <Component {...(props as P)} />
