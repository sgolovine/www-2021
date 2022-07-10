import Link from "next/link"
import Headroom from "react-headroom"
import { sidebarRoutes } from "~/defines/navigation"
import { navContainerClasses, navItemClasses } from "./classes"
import { MobileMenuTrigger, MobileMenu } from "./MobileMenu"

interface HeaderProps {
  pageTitle: string
  menuOpen: boolean
  setMenuOpen: (newState: boolean) => void
}

export const SiteHeader: React.FC<HeaderProps> = ({
  pageTitle = "Page",
  menuOpen,
  setMenuOpen,
}) => (
  <Headroom>
    <div className="border-b border-gray-700 mb-4 shadow bg-off-black">
      {/* Mobile Menu Button */}
      <div className="flex md:hidden flex-row items-center justify-between py-4 max-w-3xl mx-auto px-4">
        <p className="text-xl font-bold text-brand-yellow">{pageTitle}</p>
        <MobileMenuTrigger
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      {/* Mobile Menu */}
      {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
      {/* Regular Menu Links */}
      <div className={navContainerClasses}>
        {sidebarRoutes.map(route => (
          <Link key={route.key} href={route.route}>
            <a className={navItemClasses}>{route.name}</a>
          </Link>
        ))}
      </div>
    </div>
  </Headroom>
)
