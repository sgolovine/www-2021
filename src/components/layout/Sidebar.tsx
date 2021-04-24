import React from "react"
import { sidebarRoutes } from "~/defines/navigation"
import { Link } from "gatsby"

interface SidebarLinkProps {
  name: string
  href: string
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ name, href }) => {
  return (
    <Link to={href} className="text-brand-link" activeClassName="link-active">
      {name}
    </Link>
  )
}

const Sidebar: React.FC = () => {
  const enabledRoutes = sidebarRoutes.filter(route => route.enabled)
  return (
    <div className="pr-4 md:pr-0">
      <ul className="block text-right">
        {enabledRoutes.length > 0 &&
          enabledRoutes.map(route => {
            return (
              <li className="py-2 uppercase font-bold text-lg" key={route.key}>
                <SidebarLink
                  name={route.name.toUpperCase()}
                  href={route.route}
                />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Sidebar
