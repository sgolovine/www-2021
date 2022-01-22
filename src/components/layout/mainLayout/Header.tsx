import { useLocation } from "@reach/router"
import React, { useEffect, useState } from "react"
import useMedia from "use-media"
import { defaultHeader } from "~/defines/pageHeaders"
import { getPageHeader } from "~/helpers/getHeader"
import { CloseIcon } from "~/icons/Close"
import { Menu } from "~/icons/Menu"
import MobileMenu from "../mobileMenu/MobileMenu"

export const Header: React.FC = () => {
  const location = useLocation()

  const showMobileMenu = useMedia({ maxWidth: "767px" })
  const [mobMenuOpen, setMobMenuOpen] = useState<boolean>(false)

  const headerText = showMobileMenu
    ? getPageHeader(location.pathname)
    : defaultHeader

  useEffect(() => {
    if (!showMobileMenu) {
      setMobMenuOpen(false)
    }
  }, [showMobileMenu])

  return (
    <>
      <div className="text-left px-4 md:px-0 md:text-right py-4 md:py-16 flex flex-row justify-between items-center">
        <div className="pr-4 md:pr-0">
          <h1 className="font-heading font-extrabold text-3xl">{headerText}</h1>
        </div>
        <button
          type="button"
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
