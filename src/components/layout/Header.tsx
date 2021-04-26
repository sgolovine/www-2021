import React, { useEffect, useState } from "react"
import useMedia from "use-media"
import { CloseIcon } from "~/icons/Close"
import { Menu } from "~/icons/Menu"
import MobileMenu from "./MobileMenu"

export const Header: React.FC = () => {
  const showMobileMenu = useMedia({ maxWidth: "767px" })
  const [mobMenuOpen, setMobMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!showMobileMenu) {
      setMobMenuOpen(false)
    }
  }, [showMobileMenu])

  return (
    <>
      <div className="text-left px-4 md:px-0 md:text-right py-8 md:py-16 flex flex-row justify-between items-center">
        <div className="pr-4 md:pr-0">
          <h1 className="text-3xl">Sunny Golovine</h1>
        </div>
        <button
          onClick={() => setMobMenuOpen(!mobMenuOpen)}
          className="block md:hidden"
        >
          {mobMenuOpen ? <CloseIcon /> : <Menu />}
        </button>
      </div>
      {mobMenuOpen && showMobileMenu && (
        <MobileMenu closeMenu={() => setMobMenuOpen(false)} />
      )}
    </>
  )
}

export default Header
