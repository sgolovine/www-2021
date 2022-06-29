import React from "react"
import Link from "next/link"
import { sidebarRoutes } from "~/defines/navigation"

interface Props {
  closeMenu: () => void
}

const MobileMenu: React.FC<Props> = ({ closeMenu }) => (
  <div className="absolute z-50 bg-off-black background w-full shadow-bottom">
    <ul className="block text-center">
      {sidebarRoutes.length > 0 &&
        sidebarRoutes.map(route => (
          <li className="py-2 uppercase font-bold text-lg" key={route.key}>
            <Link onClick={closeMenu} href={route.route}>
              <a className="text-brand-link">{route.name.toUpperCase()}</a>
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default MobileMenu
