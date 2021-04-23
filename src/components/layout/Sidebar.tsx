import React from "react"
import { sidebarRoutes } from "~/defines/navigation"
import { useAnalytics } from "~/hooks/useAnalytics"
import { useLinkMatch } from "~/hooks/useLinkMatch"
import { Link } from "gatsby"

interface SidebarLinkProps {
  name: string
  href: string
  active: boolean
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ name, href }) => {
  const { trackEvent } = useAnalytics()
  return (
    <Link
      to={href}
      className="text-brand-link"
      activeClassName="link-active"
      onClick={() =>
        trackEvent({ page: "layout", action: `Link Pressed: ${name}` })
      }
    >
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
                  active={useLinkMatch(route.route)}
                />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Sidebar
