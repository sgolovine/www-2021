import React from "react"
import { sidebarRoutes } from "~/defines/navigation"

export const HomeNav = () => {
  // Remove home route from nav
  const routesToRender = sidebarRoutes.filter(route => route.route !== "/")

  return (
    <div className="flex flex-row items-center justify-evenly py-4">
      {/* TODO: Migrate Link */}
      {routesToRender.map(route => (
        <a
          className="text-lg font-heading font-bold hover:bg-brand-yellow hover:text-off-black px-2 py-1 rounded-sm"
          key={route.key}
          href={route.route}
        >
          {route.name}
        </a>
      ))}
    </div>
  )
}
