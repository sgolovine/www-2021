import React from "react"
import { AppProps } from "next/app"
import { useRequestInterceptor } from "~/services/requestInterceptor"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../styles/tailwind.css"
import "../styles/font.css"
import "../styles/punk.css"
import "../styles/styles.css"

export type NextPageWithLayout<Props = {}> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type StaticProps<Props = {}> = Promise<{
  props: Props
}>

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// eslint-disable-next-line
useRequestInterceptor()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)
  const queryClient = new QueryClient()

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
