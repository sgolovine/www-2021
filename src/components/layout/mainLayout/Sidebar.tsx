import React from "react"
import { Link } from "gatsby"
import { sidebarRoutes } from "~/defines/navigation"

const Sidebar: React.FC = () => (
  <div className="pr-4 md:pr-0">
    <ul className="block text-right">
      {sidebarRoutes.length > 0 &&
        sidebarRoutes.map(route => (
          <li className="pb-4 uppercase font-bold text-lg" key={route.key}>
            <Link
              to={route.route}
              className="text-brand-link"
              activeClassName="link-active"
            >
              {route.name.toUpperCase()}
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default Sidebar
