import React from "react"
import { sidebarRoutes } from "~/defines/navigation"
import { Link } from "gatsby"

interface Props {
  closeMenu: () => void
}

const MobileMenu: React.FC<Props> = ({ closeMenu }) => {
  const enabledRoutes = sidebarRoutes.filter(route => route.enabled)
  return (
    <div className="absolute bg-background w-full shadow-bottom">
      <ul className="block text-center">
        {enabledRoutes.length > 0 &&
          enabledRoutes.map(route => {
            return (
              <li className="py-2 uppercase font-bold text-lg" key={route.key}>
                <Link
                  onClick={closeMenu}
                  to={route.route}
                  className="text-brand-link"
                  activeClassName="link-active"
                >
                  {route.name.toUpperCase()}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default MobileMenu
