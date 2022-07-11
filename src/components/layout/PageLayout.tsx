import classNames from "classnames"
import { ReactNode, useState } from "react"
import { GlobalStyle } from "~/styles/GlobalStyle"
import { SiteHeader } from "./SiteHeader"
import Head from "next/head"

interface LayoutProps {
  pageTitle: string
  children: ReactNode
  noContentMargin?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  noContentMargin,
  pageTitle,
}) => {
  const classes = classNames("mx-auto", {
    "px-4": !noContentMargin,
    "max-w-3xl": !noContentMargin,
    "my-4": !noContentMargin,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const documentTitle = `Sunny Golovine :: ${pageTitle}`

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <GlobalStyle />
      <SiteHeader
        pageTitle={pageTitle}
        menuOpen={mobileMenuOpen}
        setMenuOpen={(newState: boolean) => setMobileMenuOpen(newState)}
      />
      <div className={classes}>{children}</div>
    </>
  )
}
