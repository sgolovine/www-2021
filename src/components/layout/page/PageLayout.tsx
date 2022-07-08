import classNames from "classnames"
import Link from "next/link"
import { ReactNode, useState } from "react"
import Headroom from "react-headroom"
import { sidebarRoutes } from "~/defines/navigation"
import { MobileMenu, MobileMenuTrigger } from "./MobileMenu"

interface LayoutProps {
  children: ReactNode
  noContentMargin?: boolean
}

interface HeaderProps {
  menuOpen: boolean
  setMenuOpen: (newState: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => (
  <Headroom>
    <div className="border-b border-gray-700 mb-4 shadow bg-off-black">
      {/* Mobile Menu Button */}
      <div className="flex md:hidden flex-row items-center justify-end py-4 max-w-3xl mx-auto px-4">
        <MobileMenuTrigger
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      {/* Mobile Menu */}
      {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
      {/* Regular Menu Links */}
      <div className="hidden md:flex flex-row items-center justify-evenly py-4 max-w-3xl mx-auto">
        {sidebarRoutes.map(route => (
          <Link key={route.key} href={route.route}>
            <a className="text-lg font-heading font-bold hover:bg-brand-yellow hover:text-off-black px-2 py-1 rounded-sm">
              {route.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  </Headroom>
)

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
      <Header
        menuOpen={mobileMenuOpen}
        setMenuOpen={(newState: boolean) => setMobileMenuOpen(newState)}
      />
      <div className={classes}>{children}</div>
    </div>
  )
}
