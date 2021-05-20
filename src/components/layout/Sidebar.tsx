import React from "react"
import { sidebarRoutes } from "~/defines/navigation"
import { Link } from "gatsby"

const Sidebar: React.FC = () => {
  const enabledRoutes = sidebarRoutes.filter(route => route.enabled)
  return (
    <div className="pr-4 md:pr-0">
      <ul className="block text-right">
        {enabledRoutes.length > 0 &&
          enabledRoutes.map(route => {
            return (
              <li className="pb-4 uppercase font-bold text-lg" key={route.key}>
                <Link
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

export default Sidebar
