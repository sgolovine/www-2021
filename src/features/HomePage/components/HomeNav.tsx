import Link from "next/link"
import React from "react"
import {
  navContainerClasses,
  navItemClasses,
} from "~/components/layout/classes"
import { sidebarRoutes } from "~/defines/navigation"

export const HomeNav = () => {
  // Remove home route from nav
  const routesToRender = sidebarRoutes.filter(route => route.route !== "/")

  return (
    <div className={navContainerClasses}>
      {routesToRender.map(route => (
        <Link key={route.key} href={route.route}>
          <a className={navItemClasses}>{route.name}</a>
        </Link>
      ))}
    </div>
  )
}
