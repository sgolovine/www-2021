import { Link } from "gatsby"
import React, { useState } from "react"
import Headroom from "react-headroom"
import { sidebarRoutes } from "~/defines/navigation"
import MobileMenu from "./mobileMenu/MobileMenu"
import { MobileMenuButton } from "./mobileMenu/MobileMenuIcon"

export const NewHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <Headroom>
      <div className="border-b border-gray-700 mb-4 shadow bg-off-black">
        {/* Mobile Menu Button */}
        <div className="flex md:hidden flex-row items-center justify-end py-4 max-w-3xl mx-auto px-4">
          <MobileMenuButton
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(prevState => !prevState)}
          />
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
        )}
        {/* Regular Menu Links */}
        <div className="hidden md:flex flex-row items-center justify-evenly py-4 max-w-3xl mx-auto">
          {sidebarRoutes.map(route => (
            <Link
              className="text-lg font-heading font-bold hover:bg-brand-yellow hover:text-off-black px-2 py-1 rounded-sm"
              key={route.key}
              to={route.route}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </Headroom>
  )
}
