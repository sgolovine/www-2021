import Link from "next/link"
import Headroom from "react-headroom"
import { sidebarRoutes } from "~/defines/navigation"
import { MobileMenuTrigger, MobileMenu } from "./MobileMenu"

interface HeaderProps {
  menuOpen: boolean
  setMenuOpen: (newState: boolean) => void
}

export const SiteHeader: React.FC<HeaderProps> = ({
  menuOpen,
  setMenuOpen,
}) => (
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
