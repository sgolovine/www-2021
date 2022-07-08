import React from "react"
import Link from "next/link"
import { CloseIcon } from "~/icons/Close"
import { Menu as MenuIcon } from "~/icons/Menu"
import { sidebarRoutes } from "~/defines/navigation"

interface MenuProps {
  closeMenu: () => void
}

interface TriggerProps {
  open: boolean
  onClick: () => void
}

export const MobileMenu: React.FC<MenuProps> = ({ closeMenu }) => (
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

export const MobileMenuTrigger: React.FC<TriggerProps> = ({
  open,
  onClick,
}) => (
  <button
    type="button"
    className="md:hidden flex flex-row items-center space-between border p-1 rounded border-gray-600"
    onClick={onClick}
  >
    <p className="text-lg font-bold font-heading pr-2">Menu</p>
    {open ? <CloseIcon /> : <MenuIcon />}
  </button>
)
