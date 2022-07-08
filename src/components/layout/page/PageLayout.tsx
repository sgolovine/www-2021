import classNames from "classnames"
import { ReactNode, useState } from "react"
import { SiteHeader } from "./SiteHeader"

interface LayoutProps {
  children: ReactNode
  noContentMargin?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  noContentMargin,
}) => {
  const classes = classNames("mx-auto", {
    "px-4": !noContentMargin,
    "max-w-3xl": !noContentMargin,
    "my-4": !noContentMargin,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <div>
      <SiteHeader
        menuOpen={mobileMenuOpen}
        setMenuOpen={(newState: boolean) => setMobileMenuOpen(newState)}
      />
      <div className={classes}>{children}</div>
    </div>
  )
}
