import React from "react"
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
            {/* TODO: Migrate Link */}
            <a
              onClick={closeMenu}
              href={route.route}
              className="text-brand-link"
              // activeClassName="link-active"
            >
              {route.name.toUpperCase()}
            </a>
          </li>
        ))}
    </ul>
  </div>
)

export default MobileMenu
