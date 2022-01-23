import React from "react"
import { CloseIcon } from "~/icons/Close"
import { Menu } from "~/icons/Menu"

interface Props {
  open: boolean
  onClick: () => void
}

export const MobileMenuButton: React.FC<Props> = ({ open, onClick }) => (
  <button
    type="button"
    className="md:hidden flex flex-row items-center space-between border p-1 rounded border-gray-600"
    onClick={onClick}
  >
    <p className="text-lg font-bold font-heading pr-2">Menu</p>
    {open ? <CloseIcon /> : <Menu />}
  </button>
)
