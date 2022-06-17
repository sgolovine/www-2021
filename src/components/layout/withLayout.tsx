import React from "react"
import MainLayout from "~/components/layout/mainLayout"
import SnippetLayout from "~/components/layout/snippetLayout"
import { NewLayout } from "./NewLayout"

export const withMainLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <MainLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </MainLayout>
    )

export const withNewLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <NewLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </NewLayout>
    )

export const withSnippetLayout =
  <Props extends object>(
    Component: React.ComponentType<Props>
  ): React.FC<Props> =>
  ({ ...props }) =>
    (
      <SnippetLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...(props as Props)} />
      </SnippetLayout>
    )
